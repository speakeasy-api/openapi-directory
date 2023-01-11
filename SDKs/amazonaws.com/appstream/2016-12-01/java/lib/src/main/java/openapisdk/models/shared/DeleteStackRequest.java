package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteStackRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteStackRequest withName(String name) {
        this.name = name;
        return this;
    }
}