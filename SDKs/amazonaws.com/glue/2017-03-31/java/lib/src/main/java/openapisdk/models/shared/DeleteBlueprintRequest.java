package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBlueprintRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteBlueprintRequest withName(String name) {
        this.name = name;
        return this;
    }
}