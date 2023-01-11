package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeprecateFlowTemplateRequest {
    @JsonProperty("id")
    public String id;
    public DeprecateFlowTemplateRequest withId(String id) {
        this.id = id;
        return this;
    }
}