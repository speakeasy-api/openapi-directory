package openapisdk.models.operations;



public class CreateRuleGroupResponse {
    public String contentType;
    public CreateRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRuleGroupResponse createRuleGroupResponse;
    public CreateRuleGroupResponse withCreateRuleGroupResponse(openapisdk.models.shared.CreateRuleGroupResponse createRuleGroupResponse) {
        this.createRuleGroupResponse = createRuleGroupResponse;
        return this;
    }
    public Object insufficientCapacityException;
    public CreateRuleGroupResponse withInsufficientCapacityException(Object insufficientCapacityException) {
        this.insufficientCapacityException = insufficientCapacityException;
        return this;
    }
    public Object internalServerError;
    public CreateRuleGroupResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public CreateRuleGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateRuleGroupResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}