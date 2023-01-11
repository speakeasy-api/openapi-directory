package openapisdk.models.operations;



public class DeleteGroupResponse {
    public String contentType;
    public DeleteGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteGroupResult;
    public DeleteGroupResponse withDeleteGroupResult(java.util.Map<String, Object> deleteGroupResult) {
        this.deleteGroupResult = deleteGroupResult;
        return this;
    }
    public Object invalidRequestException;
    public DeleteGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public DeleteGroupResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}