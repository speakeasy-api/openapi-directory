package openapisdk.models.shared;



/**
 * SendMessageBatchResult
 * For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
public class SendMessageBatchResult {
    public BatchResultErrorEntryList[] failed;
    public SendMessageBatchResult withFailed(BatchResultErrorEntryList[] failed) {
        this.failed = failed;
        return this;
    }
    public SendMessageBatchResultEntryList[] successful;
    public SendMessageBatchResult withSuccessful(SendMessageBatchResultEntryList[] successful) {
        this.successful = successful;
        return this;
    }
}