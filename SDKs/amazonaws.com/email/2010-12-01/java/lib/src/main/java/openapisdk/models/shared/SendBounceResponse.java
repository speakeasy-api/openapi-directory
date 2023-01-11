package openapisdk.models.shared;



/**
 * SendBounceResponse
 * Represents a unique message ID.
**/
public class SendBounceResponse {
    public String messageId;
    public SendBounceResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}