package openapisdk.models.operations;



public class GetAppsAppIdQueuesResponse {
    public String contentType;
    public GetAppsAppIdQueuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdQueuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAppsAppIdQueuesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.QueueResponse[] queueResponses;
    public GetAppsAppIdQueuesResponse withQueueResponses(openapisdk.models.shared.QueueResponse[] queueResponses) {
        this.queueResponses = queueResponses;
        return this;
    }
}