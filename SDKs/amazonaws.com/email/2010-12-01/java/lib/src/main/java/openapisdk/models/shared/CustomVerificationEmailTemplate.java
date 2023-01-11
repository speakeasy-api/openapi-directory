package openapisdk.models.shared;



/**
 * CustomVerificationEmailTemplate
 * Contains information about a custom verification email template.
**/
public class CustomVerificationEmailTemplate {
    public String failureRedirectionURL;
    public CustomVerificationEmailTemplate withFailureRedirectionUrl(String failureRedirectionURL) {
        this.failureRedirectionURL = failureRedirectionURL;
        return this;
    }
    public String fromEmailAddress;
    public CustomVerificationEmailTemplate withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    public String successRedirectionURL;
    public CustomVerificationEmailTemplate withSuccessRedirectionUrl(String successRedirectionURL) {
        this.successRedirectionURL = successRedirectionURL;
        return this;
    }
    public String templateName;
    public CustomVerificationEmailTemplate withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    public String templateSubject;
    public CustomVerificationEmailTemplate withTemplateSubject(String templateSubject) {
        this.templateSubject = templateSubject;
        return this;
    }
}