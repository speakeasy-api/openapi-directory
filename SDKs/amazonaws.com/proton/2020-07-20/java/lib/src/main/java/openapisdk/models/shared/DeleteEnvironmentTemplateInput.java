package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEnvironmentTemplateInput {
    @JsonProperty("name")
    public String name;
    public DeleteEnvironmentTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}