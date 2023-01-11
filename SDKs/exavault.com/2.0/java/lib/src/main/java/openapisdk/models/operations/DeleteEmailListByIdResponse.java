package openapisdk.models.operations;



public class DeleteEmailListByIdResponse {
    public String contentType;
    public DeleteEmailListByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EmptyResponse emptyResponse;
    public DeleteEmailListByIdResponse withEmptyResponse(openapisdk.models.shared.EmptyResponse emptyResponse) {
        this.emptyResponse = emptyResponse;
        return this;
    }
    public Long statusCode;
    public DeleteEmailListByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}