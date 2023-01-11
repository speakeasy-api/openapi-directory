package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetSummary
 * Information about the targets specified for a notification rule.
**/
public class TargetSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetAddress")
    public String targetAddress;
    public TargetSummary withTargetAddress(String targetAddress) {
        this.targetAddress = targetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetStatus")
    public TargetStatusEnum targetStatus;
    public TargetSummary withTargetStatus(TargetStatusEnum targetStatus) {
        this.targetStatus = targetStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public String targetType;
    public TargetSummary withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
}