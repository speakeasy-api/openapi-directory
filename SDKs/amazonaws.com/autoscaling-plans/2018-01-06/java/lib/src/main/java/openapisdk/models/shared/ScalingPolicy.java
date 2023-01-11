package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScalingPolicy
 * Represents a scaling policy.
**/
public class ScalingPolicy {
    @JsonProperty("PolicyName")
    public String policyName;
    public ScalingPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonProperty("PolicyType")
    public PolicyTypeEnum policyType;
    public ScalingPolicy withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTrackingConfiguration")
    public TargetTrackingConfiguration targetTrackingConfiguration;
    public ScalingPolicy withTargetTrackingConfiguration(TargetTrackingConfiguration targetTrackingConfiguration) {
        this.targetTrackingConfiguration = targetTrackingConfiguration;
        return this;
    }
}