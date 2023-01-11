package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbStatusInfo
 * Information about the status of a read replica.
**/
public class AwsRdsDbStatusInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public AwsRdsDbStatusInfo withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Normal")
    public Boolean normal;
    public AwsRdsDbStatusInfo withNormal(Boolean normal) {
        this.normal = normal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRdsDbStatusInfo withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusType")
    public String statusType;
    public AwsRdsDbStatusInfo withStatusType(String statusType) {
        this.statusType = statusType;
        return this;
    }
}