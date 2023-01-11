package openapisdk.models.operations;



public class GetGroupsResponse {
    public String contentType;
    public GetGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupsResult getGroupsResult;
    public GetGroupsResponse withGetGroupsResult(openapisdk.models.shared.GetGroupsResult getGroupsResult) {
        this.getGroupsResult = getGroupsResult;
        return this;
    }
    public Object invalidRequestException;
    public GetGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetGroupsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}