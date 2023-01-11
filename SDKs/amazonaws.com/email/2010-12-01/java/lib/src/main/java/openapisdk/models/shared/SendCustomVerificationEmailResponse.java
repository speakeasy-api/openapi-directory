package openapisdk.models.shared;



/**
 * SendCustomVerificationEmailResponse
 * The response received when attempting to send the custom verification email.
**/
public class SendCustomVerificationEmailResponse {
    public String messageId;
    public SendCustomVerificationEmailResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}