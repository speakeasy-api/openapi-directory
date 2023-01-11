package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetInstanceAccessInput
 * Represents the input for a request operation.
**/
public class GetInstanceAccessInput {
    @JsonProperty("FleetId")
    public String fleetId;
    public GetInstanceAccessInput withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public GetInstanceAccessInput withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}