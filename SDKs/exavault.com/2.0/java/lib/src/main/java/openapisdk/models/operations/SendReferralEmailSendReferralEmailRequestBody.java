package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendReferralEmailSendReferralEmailRequestBody {
    @JsonProperty("emails")
    public String[] emails;
    public SendReferralEmailSendReferralEmailRequestBody withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public SendReferralEmailSendReferralEmailRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
}