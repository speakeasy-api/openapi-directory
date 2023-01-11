package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateFleetRequest {
    @JsonProperty("FleetName")
    public String fleetName;
    public DisassociateFleetRequest withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonProperty("StackName")
    public String stackName;
    public DisassociateFleetRequest withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
}