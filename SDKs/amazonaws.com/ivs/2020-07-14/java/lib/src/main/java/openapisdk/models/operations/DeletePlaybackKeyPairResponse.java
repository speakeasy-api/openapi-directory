package openapisdk.models.operations;



public class DeletePlaybackKeyPairResponse {
    public Object accessDeniedException;
    public DeletePlaybackKeyPairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeletePlaybackKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePlaybackKeyPairResponse;
    public DeletePlaybackKeyPairResponse withDeletePlaybackKeyPairResponse(java.util.Map<String, Object> deletePlaybackKeyPairResponse) {
        this.deletePlaybackKeyPairResponse = deletePlaybackKeyPairResponse;
        return this;
    }
    public Object pendingVerification;
    public DeletePlaybackKeyPairResponse withPendingVerification(Object pendingVerification) {
        this.pendingVerification = pendingVerification;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePlaybackKeyPairResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePlaybackKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeletePlaybackKeyPairResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}