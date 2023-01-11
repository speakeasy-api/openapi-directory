package openapisdk.models.operations;



public class GetDirectoryResponse {
    public Object accessDeniedException;
    public GetDirectoryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDirectoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDirectoryResponse getDirectoryResponse;
    public GetDirectoryResponse withGetDirectoryResponse(openapisdk.models.shared.GetDirectoryResponse getDirectoryResponse) {
        this.getDirectoryResponse = getDirectoryResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDirectoryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetDirectoryResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetDirectoryResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object retryableConflictException;
    public GetDirectoryResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetDirectoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetDirectoryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}