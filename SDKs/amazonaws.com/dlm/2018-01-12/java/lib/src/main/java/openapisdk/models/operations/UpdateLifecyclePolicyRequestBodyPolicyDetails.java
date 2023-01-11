package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLifecyclePolicyRequestBodyPolicyDetails
 * Specifies the configuration of a lifecycle policy.
**/
public class UpdateLifecyclePolicyRequestBodyPolicyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Actions")
    public openapisdk.models.shared.Action[] actions;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withActions(openapisdk.models.shared.Action[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventSource")
    public openapisdk.models.shared.EventSource eventSource;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withEventSource(openapisdk.models.shared.EventSource eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public openapisdk.models.shared.Parameters parameters;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withParameters(openapisdk.models.shared.Parameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public openapisdk.models.shared.PolicyTypeValuesEnum policyType;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withPolicyType(openapisdk.models.shared.PolicyTypeValuesEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceLocations")
    public openapisdk.models.shared.ResourceLocationValuesEnum[] resourceLocations;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withResourceLocations(openapisdk.models.shared.ResourceLocationValuesEnum[] resourceLocations) {
        this.resourceLocations = resourceLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceTypes")
    public openapisdk.models.shared.ResourceTypeValuesEnum[] resourceTypes;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withResourceTypes(openapisdk.models.shared.ResourceTypeValuesEnum[] resourceTypes) {
        this.resourceTypes = resourceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedules")
    public openapisdk.models.shared.Schedule[] schedules;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withSchedules(openapisdk.models.shared.Schedule[] schedules) {
        this.schedules = schedules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTags")
    public openapisdk.models.shared.Tag[] targetTags;
    public UpdateLifecyclePolicyRequestBodyPolicyDetails withTargetTags(openapisdk.models.shared.Tag[] targetTags) {
        this.targetTags = targetTags;
        return this;
    }
}