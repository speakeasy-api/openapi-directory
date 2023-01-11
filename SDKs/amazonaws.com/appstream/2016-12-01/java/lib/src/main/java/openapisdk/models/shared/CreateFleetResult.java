package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFleetResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Fleet")
    public Fleet fleet;
    public CreateFleetResult withFleet(Fleet fleet) {
        this.fleet = fleet;
        return this;
    }
}