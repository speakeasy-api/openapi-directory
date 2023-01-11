package openapisdk.models.operations;



public class ListObjectParentsResponse {
    public Object accessDeniedException;
    public ListObjectParentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object cannotListParentOfRootException;
    public ListObjectParentsResponse withCannotListParentOfRootException(Object cannotListParentOfRootException) {
        this.cannotListParentOfRootException = cannotListParentOfRootException;
        return this;
    }
    public String contentType;
    public ListObjectParentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListObjectParentsResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListObjectParentsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListObjectParentsResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListObjectParentsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListObjectParentsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListObjectParentsResponse listObjectParentsResponse;
    public ListObjectParentsResponse withListObjectParentsResponse(openapisdk.models.shared.ListObjectParentsResponse listObjectParentsResponse) {
        this.listObjectParentsResponse = listObjectParentsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListObjectParentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListObjectParentsResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListObjectParentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListObjectParentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}