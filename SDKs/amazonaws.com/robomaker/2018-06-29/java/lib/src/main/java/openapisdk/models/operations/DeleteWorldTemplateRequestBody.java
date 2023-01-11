package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteWorldTemplateRequestBody {
    @JsonProperty("template")
    public String template;
    public DeleteWorldTemplateRequestBody withTemplate(String template) {
        this.template = template;
        return this;
    }
}