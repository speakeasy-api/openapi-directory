package openapisdk.models.operations;



public class DeleteMapResponse {
    public Object accessDeniedException;
    public DeleteMapResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMapResponse;
    public DeleteMapResponse withDeleteMapResponse(java.util.Map<String, Object> deleteMapResponse) {
        this.deleteMapResponse = deleteMapResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteMapResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteMapResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteMapResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteMapResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}