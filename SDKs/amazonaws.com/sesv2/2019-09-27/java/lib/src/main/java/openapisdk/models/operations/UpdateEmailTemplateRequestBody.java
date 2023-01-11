package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEmailTemplateRequestBody {
    @JsonProperty("TemplateContent")
    public UpdateEmailTemplateRequestBodyTemplateContent templateContent;
    public UpdateEmailTemplateRequestBody withTemplateContent(UpdateEmailTemplateRequestBodyTemplateContent templateContent) {
        this.templateContent = templateContent;
        return this;
    }
}