package openapisdk.models.operations;



public class StartEngagementResponse {
    public Object accessDeniedException;
    public StartEngagementResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public StartEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public StartEngagementResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public Object internalServerException;
    public StartEngagementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartEngagementResult startEngagementResult;
    public StartEngagementResponse withStartEngagementResult(openapisdk.models.shared.StartEngagementResult startEngagementResult) {
        this.startEngagementResult = startEngagementResult;
        return this;
    }
    public Long statusCode;
    public StartEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartEngagementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public StartEngagementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}