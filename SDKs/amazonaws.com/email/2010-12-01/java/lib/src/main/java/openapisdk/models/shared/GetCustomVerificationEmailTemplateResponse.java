package openapisdk.models.shared;



/**
 * GetCustomVerificationEmailTemplateResponse
 * The content of the custom verification email template.
**/
public class GetCustomVerificationEmailTemplateResponse {
    public String failureRedirectionURL;
    public GetCustomVerificationEmailTemplateResponse withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    public String fromEmailAddress;
    public GetCustomVerificationEmailTemplateResponse withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    public String successRedirectionURL;
    public GetCustomVerificationEmailTemplateResponse withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    public String templateContent;
    public GetCustomVerificationEmailTemplateResponse withTemplateContent(String templateContent) {
        this.templateContent = templateContent;
        return this;
    }
    public String templateName;
    public GetCustomVerificationEmailTemplateResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    public String templateSubject;
    public GetCustomVerificationEmailTemplateResponse withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
}