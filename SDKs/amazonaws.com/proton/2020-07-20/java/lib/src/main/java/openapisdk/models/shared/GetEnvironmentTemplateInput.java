package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentTemplateInput {
    @JsonProperty("name")
    public String name;
    public GetEnvironmentTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}