package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterScalableTargetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCapacity")
    public Long maxCapacity;
    public RegisterScalableTargetRequest withMaxCapacity(Long maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinCapacity")
    public Long minCapacity;
    public RegisterScalableTargetRequest withMinCapacity(Long minCapacity) {
        this.minCapacity = minCapacity;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public RegisterScalableTargetRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public RegisterScalableTargetRequest withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public RegisterScalableTargetRequest withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public RegisterScalableTargetRequest withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuspendedState")
    public SuspendedState suspendedState;
    public RegisterScalableTargetRequest withSuspendedState(SuspendedState suspendedState) {
        this.suspendedState = suspendedState;
        return this;
    }
}