package openapisdk.models.shared;



/**
 * SendRawEmailResponse
 * Represents a unique message ID.
**/
public class SendRawEmailResponse {
    public String messageId;
    public SendRawEmailResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}