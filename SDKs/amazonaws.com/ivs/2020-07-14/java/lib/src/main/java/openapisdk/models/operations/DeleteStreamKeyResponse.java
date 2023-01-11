package openapisdk.models.operations;



public class DeleteStreamKeyResponse {
    public Object accessDeniedException;
    public DeleteStreamKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteStreamKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pendingVerification;
    public DeleteStreamKeyResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteStreamKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteStreamKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteStreamKeyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}