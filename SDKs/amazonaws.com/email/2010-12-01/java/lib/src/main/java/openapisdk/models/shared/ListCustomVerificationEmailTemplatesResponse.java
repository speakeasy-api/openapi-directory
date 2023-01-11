package openapisdk.models.shared;



/**
 * ListCustomVerificationEmailTemplatesResponse
 * A paginated list of custom verification email templates.
**/
public class ListCustomVerificationEmailTemplatesResponse {
    public CustomVerificationEmailTemplate[] customVerificationEmailTemplates;
    public ListCustomVerificationEmailTemplatesResponse withCustomVerificationEmailTemplates(CustomVerificationEmailTemplate[] customVerificationEmailTemplates) {
        this.customVerificationEmailTemplates = customVerificationEmailTemplates;
        return this;
    }
    public String nextToken;
    public ListCustomVerificationEmailTemplatesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}