package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprecateSystemTemplateRequest {
    @JsonProperty("id")
    public String id;
    public DeprecateSystemTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}