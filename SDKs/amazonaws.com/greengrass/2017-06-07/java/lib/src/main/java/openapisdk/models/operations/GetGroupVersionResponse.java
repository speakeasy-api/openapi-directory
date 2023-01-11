package openapisdk.models.operations;



public class GetGroupVersionResponse {
    public Object badRequestException;
    public GetGroupVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetGroupVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupVersionResponse getGroupVersionResponse;
    public GetGroupVersionResponse withGetGroupVersionResponse(openapisdk.models.shared.GetGroupVersionResponse getGroupVersionResponse) {
        this.getGroupVersionResponse = getGroupVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetGroupVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}