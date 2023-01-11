package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FleetError
 * Describes a fleet error.
**/
public class FleetError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public FleetErrorCodeEnum errorCode;
    public FleetError withErrorCode(FleetErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public FleetError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
}