package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteScalingPolicyRequest {
    @JsonProperty("PolicyName")
    public String policyName;
    public DeleteScalingPolicyRequest withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public DeleteScalingPolicyRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public DeleteScalingPolicyRequest withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public DeleteScalingPolicyRequest withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
}