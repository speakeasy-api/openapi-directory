package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFlowTemplateRequest {
    @JsonProperty("id")
    public String id;
    public DeleteFlowTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}