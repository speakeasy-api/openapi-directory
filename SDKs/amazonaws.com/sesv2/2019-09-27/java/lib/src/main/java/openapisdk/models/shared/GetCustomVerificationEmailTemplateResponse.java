package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetCustomVerificationEmailTemplateResponse
 * The following elements are returned by the service.
**/
public class GetCustomVerificationEmailTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailureRedirectionURL")
    public String failureRedirectionURL;
    public GetCustomVerificationEmailTemplateResponse withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromEmailAddress")
    public String fromEmailAddress;
    public GetCustomVerificationEmailTemplateResponse withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuccessRedirectionURL")
    public String successRedirectionURL;
    public GetCustomVerificationEmailTemplateResponse withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateContent")
    public String templateContent;
    public GetCustomVerificationEmailTemplateResponse withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateName")
    public String templateName;
    public GetCustomVerificationEmailTemplateResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateSubject")
    public String templateSubject;
    public GetCustomVerificationEmailTemplateResponse withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
}