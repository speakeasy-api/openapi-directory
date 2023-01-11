package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Location withLocation(String location) {
        this.location = location;
        return this;
    }
}