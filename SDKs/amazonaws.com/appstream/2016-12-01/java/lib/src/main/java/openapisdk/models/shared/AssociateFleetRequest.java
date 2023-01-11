package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateFleetRequest {
    @JsonProperty("FleetName")
    public String fleetName;
    public AssociateFleetRequest withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonProperty("StackName")
    public String stackName;
    public AssociateFleetRequest withStackName(String stackName) {
        this.stackName = stackName;
        return this;
    }
}