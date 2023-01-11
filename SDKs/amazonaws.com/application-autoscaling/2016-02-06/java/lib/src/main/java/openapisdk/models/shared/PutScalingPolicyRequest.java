package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutScalingPolicyRequest {
    @JsonProperty("PolicyName")
    public String policyName;
    public PutScalingPolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public PolicyTypeEnum policyType;
    public PutScalingPolicyRequest withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public PutScalingPolicyRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public PutScalingPolicyRequest withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public PutScalingPolicyRequest withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StepScalingPolicyConfiguration")
    public StepScalingPolicyConfiguration stepScalingPolicyConfiguration;
    public PutScalingPolicyRequest withStepScalingPolicyConfiguration(StepScalingPolicyConfiguration stepScalingPolicyConfiguration) {
        this.stepScalingPolicyConfiguration = stepScalingPolicyConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTrackingScalingPolicyConfiguration")
    public TargetTrackingScalingPolicyConfiguration targetTrackingScalingPolicyConfiguration;
    public PutScalingPolicyRequest withTargetTrackingScalingPolicyConfiguration(TargetTrackingScalingPolicyConfiguration targetTrackingScalingPolicyConfiguration) {
        this.targetTrackingScalingPolicyConfiguration = targetTrackingScalingPolicyConfiguration;
        return this;
    }
}