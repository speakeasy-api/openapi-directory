package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEmailTemplateRequestBody {
    @JsonProperty("TemplateContent")
    public CreateEmailTemplateRequestBodyTemplateContent templateContent;
    public CreateEmailTemplateRequestBody withTemplateContent(CreateEmailTemplateRequestBodyTemplateContent templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public CreateEmailTemplateRequestBody withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}