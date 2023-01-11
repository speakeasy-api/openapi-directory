package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetEmailTemplateResponse
 * The following element is returned by the service.
**/
public class GetEmailTemplateResponse {
    @JsonProperty("TemplateContent")
    public EmailTemplateContent templateContent;
    public GetEmailTemplateResponse withTemplateContent(EmailTemplateContent templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public GetEmailTemplateResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}