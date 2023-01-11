package openapisdk.models.shared;



/**
 * CreateQueueResult
 * Returns the <code>QueueUrl</code> attribute of the created queue.
**/
public class CreateQueueResult {
    public String queueUrl;
    public CreateQueueResult withQueueUrl(String queueUrl) {
        this.queueUrl = queueUrl;
        return this;
    }
}