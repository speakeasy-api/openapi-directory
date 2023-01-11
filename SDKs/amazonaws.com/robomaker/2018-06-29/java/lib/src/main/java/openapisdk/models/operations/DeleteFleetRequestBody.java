package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFleetRequestBody {
    @JsonProperty("fleet")
    public String fleet;
    public DeleteFleetRequestBody withFleet(String fleet) {
        this.fleet = fleet;
        return this;
    }
}