package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceTemplateInput {
    @JsonProperty("name")
    public String name;
    public GetServiceTemplateInput withName(String name) {
        this.name = name;
        return this;
    }
}