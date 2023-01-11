package openapisdk.models.shared;



/**
 * BulkEmailDestinationStatus
 * An object that contains the response from the <code>SendBulkTemplatedEmail</code> operation.
**/
public class BulkEmailDestinationStatus {
    public String error;
    public BulkEmailDestinationStatus withError(String error) {
        this.error = error;
        return this;
    }
    public String messageId;
    public BulkEmailDestinationStatus withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    public BulkEmailStatusEnum status;
    public BulkEmailDestinationStatus withStatus(BulkEmailStatusEnum status) {
        this.status = status;
        return this;
    }
}