package openapisdk.models.operations;



public class DeleteContactResponse {
    public Object accessDeniedException;
    public DeleteContactResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContactResult;
    public DeleteContactResponse withDeleteContactResult(java.util.Map<String, Object> deleteContactResult) {
        this.deleteContactResult = deleteContactResult;
        return this;
    }
    public Object internalServerException;
    public DeleteContactResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteContactResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteContactResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}