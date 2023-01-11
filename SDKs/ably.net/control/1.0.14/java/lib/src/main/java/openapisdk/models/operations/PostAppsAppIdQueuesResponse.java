package openapisdk.models.operations;



public class PostAppsAppIdQueuesResponse {
    public String contentType;
    public PostAppsAppIdQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAppsAppIdQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAppsAppIdQueuesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.QueueResponse queueResponse;
    public PostAppsAppIdQueuesResponse withQueueResponse(openapisdk.models.shared.QueueResponse queueResponse) {
        this.queueResponse = queueResponse;
        return this;
    }
}