package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteImageBuilderRequest {
    @JsonProperty("Name")
    public String name;
    public DeleteImageBuilderRequest withName(String name) {
        this.name = name;
        return this;
    }
}