package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScalingPlanResource
 * Represents a scalable resource.
**/
public class ScalingPlanResource {
    @JsonProperty("ResourceId")
    public String resourceId;
    public ScalingPlanResource withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public ScalingPlanResource withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ScalingPlanName")
    public String scalingPlanName;
    public ScalingPlanResource withScalingPlanName(String scalingPlanName) {
        this.scalingPlanName = scalingPlanName;
        return this;
    }
    @JsonProperty("ScalingPlanVersion")
    public Long scalingPlanVersion;
    public ScalingPlanResource withScalingPlanVersion(Long scalingPlanVersion) {
        this.scalingPlanVersion = scalingPlanVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPolicies")
    public ScalingPolicy[] scalingPolicies;
    public ScalingPlanResource withScalingPolicies(ScalingPolicy[] scalingPolicies) {
        this.scalingPolicies = scalingPolicies;
        return this;
    }
    @JsonProperty("ScalingStatusCode")
    public ScalingStatusCodeEnum scalingStatusCode;
    public ScalingPlanResource withScalingStatusCode(ScalingStatusCodeEnum scalingStatusCode) {
        this.scalingStatusCode = scalingStatusCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingStatusMessage")
    public String scalingStatusMessage;
    public ScalingPlanResource withScalingStatusMessage(String scalingStatusMessage) {
        this.scalingStatusMessage = scalingStatusMessage;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public ScalingPlanResource withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
}