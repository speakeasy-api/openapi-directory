package openapisdk.models.shared;



/**
 * SendEmailResponse
 * Represents a unique message ID.
**/
public class SendEmailResponse {
    public String messageId;
    public SendEmailResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}