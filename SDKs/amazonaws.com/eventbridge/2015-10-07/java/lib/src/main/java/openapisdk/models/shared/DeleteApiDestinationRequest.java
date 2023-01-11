package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteApiDestinationRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteApiDestinationRequest withName(String name) {
        this.name = name;
        return this;
    }
}