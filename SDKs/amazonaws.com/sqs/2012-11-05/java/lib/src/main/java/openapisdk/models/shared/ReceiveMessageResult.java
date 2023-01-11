package openapisdk.models.shared;



/**
 * ReceiveMessageResult
 * A list of received messages.
**/
public class ReceiveMessageResult {
    public MessageList[] messages;
    public ReceiveMessageResult withMessages(MessageList[] messages) {
        this.messages = messages;
        return this;
    }
}