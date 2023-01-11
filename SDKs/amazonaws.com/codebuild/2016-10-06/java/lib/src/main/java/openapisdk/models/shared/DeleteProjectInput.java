package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProjectInput {
    @JsonProperty("name")
    public String name;
    public DeleteProjectInput withName(String name) {
        this.name = name;
        return this;
    }
}