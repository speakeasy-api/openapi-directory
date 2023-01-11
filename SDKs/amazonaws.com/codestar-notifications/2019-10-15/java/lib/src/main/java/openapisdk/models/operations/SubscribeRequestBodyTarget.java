package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscribeRequestBodyTarget
 * Information about the SNS topics associated with a notification rule.
**/
public class SubscribeRequestBodyTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetAddress")
    public String targetAddress;
    public SubscribeRequestBodyTarget withTargetAddress(String targetAddress) {
        this.targetAddress = targetAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetType")
    public String targetType;
    public SubscribeRequestBodyTarget withTargetType(String targetType) {
        this.targetType = targetType;
        return this;
    }
}