package openapisdk.models.shared;



/**
 * ListDeadLetterSourceQueuesResult
 * A list of your dead letter source queues.
**/
public class ListDeadLetterSourceQueuesResult {
    public String nextToken;
    public ListDeadLetterSourceQueuesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object>[] queueUrls;
    public ListDeadLetterSourceQueuesResult withQueueUrls(java.util.Map<String, Object>[] queueUrls) {
        this.queueUrls = queueUrls;
        return this;
    }
}