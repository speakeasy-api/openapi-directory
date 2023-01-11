package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeregisterScalableTargetRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public DeregisterScalableTargetRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public DeregisterScalableTargetRequest withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public DeregisterScalableTargetRequest withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
}