package openapisdk.models.operations;



public class CreateBucketAccessKeyResponse {
    public Object accessDeniedException;
    public CreateBucketAccessKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateBucketAccessKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBucketAccessKeyResult createBucketAccessKeyResult;
    public CreateBucketAccessKeyResponse withCreateBucketAccessKeyResult(openapisdk.models.shared.CreateBucketAccessKeyResult createBucketAccessKeyResult) {
        this.createBucketAccessKeyResult = createBucketAccessKeyResult;
        return this;
    }
    public Object invalidInputException;
    public CreateBucketAccessKeyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateBucketAccessKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public CreateBucketAccessKeyResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateBucketAccessKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateBucketAccessKeyResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}