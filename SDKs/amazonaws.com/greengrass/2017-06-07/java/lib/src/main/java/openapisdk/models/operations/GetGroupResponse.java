package openapisdk.models.operations;



public class GetGroupResponse {
    public Object badRequestException;
    public GetGroupResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupResponse getGroupResponse;
    public GetGroupResponse withGetGroupResponse(openapisdk.models.shared.GetGroupResponse getGroupResponse) {
        this.getGroupResponse = getGroupResponse;
        return this;
    }
    public Long statusCode;
    public GetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}