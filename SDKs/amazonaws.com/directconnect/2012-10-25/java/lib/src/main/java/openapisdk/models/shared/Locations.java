package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Locations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public Locations withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
}