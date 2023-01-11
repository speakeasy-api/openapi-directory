package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceTemplateInput {
    @JsonProperty("name")
    public String name;
    public DeleteServiceTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}