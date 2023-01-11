package openapisdk.models.operations;



public class CancelJobResponse {
    public Object accessDeniedException;
    public CancelJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> cancelJobResponse;
    public CancelJobResponse withCancelJobResponse(java.util.Map<String, Object> cancelJobResponse) {
        this.cancelJobResponse = cancelJobResponse;
        return this;
    }
    public String contentType;
    public CancelJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public CancelJobResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public CancelJobResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object resourceInUseException;
    public CancelJobResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CancelJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}