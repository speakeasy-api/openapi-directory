package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCustomVerificationEmailTemplateRequestBody {
    @JsonProperty("FailureRedirectionURL")
    public String failureRedirectionURL;
    public CreateCustomVerificationEmailTemplateRequestBody withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public CreateCustomVerificationEmailTemplateRequestBody withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonProperty("SuccessRedirectionURL")
    public String successRedirectionURL;
    public CreateCustomVerificationEmailTemplateRequestBody withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    @JsonProperty("TemplateContent")
    public String templateContent;
    public CreateCustomVerificationEmailTemplateRequestBody withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @JsonProperty("TemplateName")
    public String templateName;
    public CreateCustomVerificationEmailTemplateRequestBody withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonProperty("TemplateSubject")
    public String templateSubject;
    public CreateCustomVerificationEmailTemplateRequestBody withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
}