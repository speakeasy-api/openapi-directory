package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSystemTemplateRequest {
    @JsonProperty("id")
    public String id;
    public DeleteSystemTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}