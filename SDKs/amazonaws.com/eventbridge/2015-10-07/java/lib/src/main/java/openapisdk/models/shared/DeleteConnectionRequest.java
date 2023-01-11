package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConnectionRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteConnectionRequest withName(String name) {
        this.name = name;
        return this;
    }
}