package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteScalingPolicyInput
 * Represents the input for a request operation.
**/
public class DeleteScalingPolicyInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public DeleteScalingPolicyInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public DeleteScalingPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
}