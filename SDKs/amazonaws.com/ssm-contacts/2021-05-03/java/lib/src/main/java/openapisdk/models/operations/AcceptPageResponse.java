package openapisdk.models.operations;



public class AcceptPageResponse {
    public java.util.Map<String, Object> acceptPageResult;
    public AcceptPageResponse withAcceptPageResult(java.util.Map<String, Object> acceptPageResult) {
        this.acceptPageResult = acceptPageResult;
        return this;
    }
    public Object accessDeniedException;
    public AcceptPageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public AcceptPageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AcceptPageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptPageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptPageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AcceptPageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public AcceptPageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}