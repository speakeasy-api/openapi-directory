package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ResourceError
 * Describes a resource error.
**/
public class ResourceError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public FleetErrorCodeEnum errorCode;
    public ResourceError withErrorCode(FleetErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public ResourceError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ErrorTimestamp")
    public OffsetDateTime errorTimestamp;
    public ResourceError withErrorTimestamp(OffsetDateTime errorTimestamp) {
        this.errorTimestamp = errorTimestamp;
        return this;
    }
}