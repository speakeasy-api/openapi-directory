package openapisdk.models.operations;



public class DeleteNotificationByIdResponse {
    public String contentType;
    public DeleteNotificationByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public DeleteNotificationByIdResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public Long statusCode;
    public DeleteNotificationByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}