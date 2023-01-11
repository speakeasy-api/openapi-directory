package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFleetRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public DeleteFleetRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
}