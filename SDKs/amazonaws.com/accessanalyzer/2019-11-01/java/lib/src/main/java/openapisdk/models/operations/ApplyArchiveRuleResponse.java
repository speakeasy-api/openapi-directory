package openapisdk.models.operations;



public class ApplyArchiveRuleResponse {
    public Object accessDeniedException;
    public ApplyArchiveRuleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ApplyArchiveRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ApplyArchiveRuleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public ApplyArchiveRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ApplyArchiveRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ApplyArchiveRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ApplyArchiveRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}