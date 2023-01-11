package openapisdk.models.operations;



public class GetGroupResponse {
    public String contentType;
    public GetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGroupResult getGroupResult;
    public GetGroupResponse withGetGroupResult(openapisdk.models.shared.GetGroupResult getGroupResult) {
        this.getGroupResult = getGroupResult;
        return this;
    }
    public Object invalidRequestException;
    public GetGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetGroupResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}