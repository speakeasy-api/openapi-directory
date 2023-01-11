package openapisdk.models.operations;



public class ListAttachedIndicesResponse {
    public Object accessDeniedException;
    public ListAttachedIndicesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListAttachedIndicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListAttachedIndicesResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListAttachedIndicesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListAttachedIndicesResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public ListAttachedIndicesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListAttachedIndicesResponse listAttachedIndicesResponse;
    public ListAttachedIndicesResponse withListAttachedIndicesResponse(openapisdk.models.shared.ListAttachedIndicesResponse listAttachedIndicesResponse) {
        this.listAttachedIndicesResponse = listAttachedIndicesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAttachedIndicesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListAttachedIndicesResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListAttachedIndicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAttachedIndicesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}