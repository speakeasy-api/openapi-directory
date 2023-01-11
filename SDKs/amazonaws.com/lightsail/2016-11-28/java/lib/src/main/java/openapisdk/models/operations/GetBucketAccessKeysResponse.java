package openapisdk.models.operations;



public class GetBucketAccessKeysResponse {
    public Object accessDeniedException;
    public GetBucketAccessKeysResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetBucketAccessKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBucketAccessKeysResult getBucketAccessKeysResult;
    public GetBucketAccessKeysResponse withGetBucketAccessKeysResult(openapisdk.models.shared.GetBucketAccessKeysResult getBucketAccessKeysResult) {
        this.getBucketAccessKeysResult = getBucketAccessKeysResult;
        return this;
    }
    public Object invalidInputException;
    public GetBucketAccessKeysResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetBucketAccessKeysResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetBucketAccessKeysResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetBucketAccessKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetBucketAccessKeysResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}