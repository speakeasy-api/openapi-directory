package openapisdk.models.shared;



/**
 * ListQueuesResult
 * A list of your queues.
**/
public class ListQueuesResult {
    public String nextToken;
    public ListQueuesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object>[] queueUrls;
    public ListQueuesResult withQueueUrls(java.util.Map<String, Object>[] queueUrls) {
        this.queueUrls = queueUrls;
        return this;
    }
}