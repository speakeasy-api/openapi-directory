package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEnvironmentInput {
    @JsonProperty("name")
    public String name;
    public DeleteEnvironmentInput withName(String name) {
        this.name = name;
        return this;
    }
}