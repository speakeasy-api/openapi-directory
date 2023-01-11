package openapisdk.models.operations;



public class DeleteRuleGroupResponse {
    public String contentType;
    public DeleteRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRuleGroupResponse deleteRuleGroupResponse;
    public DeleteRuleGroupResponse withDeleteRuleGroupResponse(openapisdk.models.shared.DeleteRuleGroupResponse deleteRuleGroupResponse) {
        this.deleteRuleGroupResponse = deleteRuleGroupResponse;
        return this;
    }
    public Object internalServerError;
    public DeleteRuleGroupResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public DeleteRuleGroupResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteRuleGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRuleGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRuleGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteRuleGroupResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}