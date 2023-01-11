package openapisdk.models.operations;



public class CreateGroupResponse {
    public String contentType;
    public CreateGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateGroupResult createGroupResult;
    public CreateGroupResponse withCreateGroupResult(openapisdk.models.shared.CreateGroupResult createGroupResult) {
        this.createGroupResult = createGroupResult;
        return this;
    }
    public Object invalidRequestException;
    public CreateGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public CreateGroupResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}