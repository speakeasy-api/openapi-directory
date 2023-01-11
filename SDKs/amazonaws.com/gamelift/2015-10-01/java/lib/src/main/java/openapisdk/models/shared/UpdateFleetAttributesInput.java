package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFleetAttributesInput
 * Represents the input for a request operation.
**/
public class UpdateFleetAttributesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateFleetAttributesInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("FleetId")
    public String fleetId;
    public UpdateFleetAttributesInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricGroups")
    public String[] metricGroups;
    public UpdateFleetAttributesInput withMetricGroups(String[] metricGroups) {
        this.metricGroups = metricGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateFleetAttributesInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NewGameSessionProtectionPolicy")
    public ProtectionPolicyEnum newGameSessionProtectionPolicy;
    public UpdateFleetAttributesInput withNewGameSessionProtectionPolicy(ProtectionPolicyEnum newGameSessionProtectionPolicy) {
        this.newGameSessionProtectionPolicy = newGameSessionProtectionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCreationLimitPolicy")
    public ResourceCreationLimitPolicy resourceCreationLimitPolicy;
    public UpdateFleetAttributesInput withResourceCreationLimitPolicy(ResourceCreationLimitPolicy resourceCreationLimitPolicy) {
        this.resourceCreationLimitPolicy = resourceCreationLimitPolicy;
        return this;
    }
}