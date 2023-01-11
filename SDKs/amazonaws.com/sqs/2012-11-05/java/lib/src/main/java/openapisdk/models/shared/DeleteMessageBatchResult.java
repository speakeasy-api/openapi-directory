package openapisdk.models.shared;



/**
 * DeleteMessageBatchResult
 * For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
**/
public class DeleteMessageBatchResult {
    public BatchResultErrorEntryList[] failed;
    public DeleteMessageBatchResult withFailed(BatchResultErrorEntryList[] failed) {
        this.failed = failed;
        return this;
    }
    public DeleteMessageBatchResultEntryList[] successful;
    public DeleteMessageBatchResult withSuccessful(DeleteMessageBatchResultEntryList[] successful) {
        this.successful = successful;
        return this;
    }
}