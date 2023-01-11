package openapisdk.models.operations;



public class DeleteAppsAppIdQueuesQueueIdResponse {
    public String contentType;
    public DeleteAppsAppIdQueuesQueueIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAppsAppIdQueuesQueueIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteAppsAppIdQueuesQueueIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}