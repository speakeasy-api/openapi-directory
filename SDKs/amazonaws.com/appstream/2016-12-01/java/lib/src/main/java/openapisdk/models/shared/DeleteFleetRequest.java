package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFleetRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteFleetRequest withName(String name) {
        this.name = name;
        return this;
    }
}