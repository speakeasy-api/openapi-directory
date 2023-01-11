package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCustomVerificationEmailTemplateRequestBody {
    @JsonProperty("FailureRedirectionURL")
    public String failureRedirectionURL;
    public UpdateCustomVerificationEmailTemplateRequestBody withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public UpdateCustomVerificationEmailTemplateRequestBody withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonProperty("SuccessRedirectionURL")
    public String successRedirectionURL;
    public UpdateCustomVerificationEmailTemplateRequestBody withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    @JsonProperty("TemplateContent")
    public String templateContent;
    public UpdateCustomVerificationEmailTemplateRequestBody withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @JsonProperty("TemplateSubject")
    public String templateSubject;
    public UpdateCustomVerificationEmailTemplateRequestBody withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
}