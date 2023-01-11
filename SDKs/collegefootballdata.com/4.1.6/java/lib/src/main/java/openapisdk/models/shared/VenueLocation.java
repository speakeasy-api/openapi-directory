package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VenueLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x")
    public Double x;
    public VenueLocation withX(Double x) {
        this.x = x;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("y")
    public Double y;
    public VenueLocation withY(Double y) {
        this.y = y;
        return this;
    }
}