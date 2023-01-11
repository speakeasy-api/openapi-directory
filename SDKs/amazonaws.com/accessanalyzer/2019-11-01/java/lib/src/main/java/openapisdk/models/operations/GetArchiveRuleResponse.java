package openapisdk.models.operations;



public class GetArchiveRuleResponse {
    public Object accessDeniedException;
    public GetArchiveRuleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetArchiveRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetArchiveRuleResponse getArchiveRuleResponse;
    public GetArchiveRuleResponse withGetArchiveRuleResponse(openapisdk.models.shared.GetArchiveRuleResponse getArchiveRuleResponse) {
        this.getArchiveRuleResponse = getArchiveRuleResponse;
        return this;
    }
    public Object internalServerException;
    public GetArchiveRuleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetArchiveRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetArchiveRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetArchiveRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetArchiveRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}