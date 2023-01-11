package openapisdk.models.operations;



public class UpdateGroupResponse {
    public String contentType;
    public UpdateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public UpdateGroupResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
    public openapisdk.models.shared.UpdateGroupResult updateGroupResult;
    public UpdateGroupResponse withUpdateGroupResult(openapisdk.models.shared.UpdateGroupResult updateGroupResult) {
        this.updateGroupResult = updateGroupResult;
        return this;
    }
}