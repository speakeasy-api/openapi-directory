package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartFleetRequest {
    @JsonProperty("Name")
    public String name;
    public StartFleetRequest withName(String name) {
        this.name = name;
        return this;
    }
}