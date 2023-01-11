package openapisdk.models.operations;



public class ListObjectChildrenResponse {
    public Object accessDeniedException;
    public ListObjectChildrenResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListObjectChildrenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directoryNotEnabledException;
    public ListObjectChildrenResponse withDirectoryNotEnabledException(Object directoryNotEnabledException) {
        this.directoryNotEnabledException = directoryNotEnabledException;
        return this;
    }
    public Object internalServiceException;
    public ListObjectChildrenResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public ListObjectChildrenResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListObjectChildrenResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object limitExceededException;
    public ListObjectChildrenResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListObjectChildrenResponse listObjectChildrenResponse;
    public ListObjectChildrenResponse withListObjectChildrenResponse(openapisdk.models.shared.ListObjectChildrenResponse listObjectChildrenResponse) {
        this.listObjectChildrenResponse = listObjectChildrenResponse;
        return this;
    }
    public Object notNodeException;
    public ListObjectChildrenResponse withNotNodeException(Object notNodeException) {
        this.notNodeException = notNodeException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListObjectChildrenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public ListObjectChildrenResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListObjectChildrenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListObjectChildrenResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}