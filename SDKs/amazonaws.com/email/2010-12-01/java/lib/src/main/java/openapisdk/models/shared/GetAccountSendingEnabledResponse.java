package openapisdk.models.shared;



/**
 * GetAccountSendingEnabledResponse
 * Represents a request to return the email sending status for your Amazon SES account in the current AWS Region.
**/
public class GetAccountSendingEnabledResponse {
    public Boolean enabled;
    public GetAccountSendingEnabledResponse withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}