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
 * AccessKeyLastUsed
 * <p>Describes the last time an access key was used.</p> <note> <p>This object does not include data in the response of a <a>CreateBucketAccessKey</a> action.</p> </note>
**/
public class AccessKeyLastUsed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUsedDate")
    public OffsetDateTime lastUsedDate;
    public AccessKeyLastUsed withLastUsedDate(OffsetDateTime lastUsedDate) {
        this.lastUsedDate = lastUsedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public AccessKeyLastUsed withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public AccessKeyLastUsed withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}