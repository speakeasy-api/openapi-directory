package openapisdk.models.operations;



public class DeleteBucketAccessKeyResponse {
    public Object accessDeniedException;
    public DeleteBucketAccessKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteBucketAccessKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBucketAccessKeyResult deleteBucketAccessKeyResult;
    public DeleteBucketAccessKeyResponse withDeleteBucketAccessKeyResult(openapisdk.models.shared.DeleteBucketAccessKeyResult deleteBucketAccessKeyResult) {
        this.deleteBucketAccessKeyResult = deleteBucketAccessKeyResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteBucketAccessKeyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteBucketAccessKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteBucketAccessKeyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteBucketAccessKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteBucketAccessKeyResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}