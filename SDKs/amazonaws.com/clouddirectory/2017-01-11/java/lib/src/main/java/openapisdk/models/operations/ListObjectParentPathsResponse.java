package openapisdk.models.operations;



public class ListObjectParentPathsResponse {
    public Object accessDeniedException;
    public ListObjectParentPathsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListObjectParentPathsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListObjectParentPathsResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListObjectParentPathsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListObjectParentPathsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListObjectParentPathsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListObjectParentPathsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListObjectParentPathsResponse listObjectParentPathsResponse;
    public ListObjectParentPathsResponse withListObjectParentPathsResponse(openapisdk.models.shared.ListObjectParentPathsResponse listObjectParentPathsResponse) {
        this.listObjectParentPathsResponse = listObjectParentPathsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListObjectParentPathsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListObjectParentPathsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListObjectParentPathsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListObjectParentPathsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}