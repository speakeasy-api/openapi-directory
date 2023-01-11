package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEventBusRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteEventBusRequest withName(String name) {
        this.name = name;
        return this;
    }
}