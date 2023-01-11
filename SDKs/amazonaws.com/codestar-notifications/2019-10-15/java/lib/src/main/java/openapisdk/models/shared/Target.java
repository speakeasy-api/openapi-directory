package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * Information about the SNS topics associated with a notification rule.
**/
public class Target {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetAddress")
    public String targetAddress;
    public Target withTargetAddress(String targetAddress) {
        this.targetAddress = targetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public String targetType;
    public Target withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
}