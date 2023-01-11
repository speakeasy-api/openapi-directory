package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopFleetRequest {
    @JsonProperty("Name")
    public String name;
    public StopFleetRequest withName(String name) {
        this.name = name;
        return this;
    }
}