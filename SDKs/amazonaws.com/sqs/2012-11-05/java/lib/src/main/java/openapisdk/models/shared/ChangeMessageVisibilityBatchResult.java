package openapisdk.models.shared;



/**
 * ChangeMessageVisibilityBatchResult
 * For each message in the batch, the response contains a <code> <a>ChangeMessageVisibilityBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
**/
public class ChangeMessageVisibilityBatchResult {
    public BatchResultErrorEntryList[] failed;
    public ChangeMessageVisibilityBatchResult withFailed(BatchResultErrorEntryList[] failed) {
        this.failed = failed;
        return this;
    }
    public ChangeMessageVisibilityBatchResultEntryList[] successful;
    public ChangeMessageVisibilityBatchResult withSuccessful(ChangeMessageVisibilityBatchResultEntryList[] successful) {
        this.successful = successful;
        return this;
    }
}