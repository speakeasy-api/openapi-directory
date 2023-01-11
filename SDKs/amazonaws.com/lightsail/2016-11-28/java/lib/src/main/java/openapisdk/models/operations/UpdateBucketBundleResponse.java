package openapisdk.models.operations;



public class UpdateBucketBundleResponse {
    public Object accessDeniedException;
    public UpdateBucketBundleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateBucketBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateBucketBundleResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateBucketBundleResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateBucketBundleResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateBucketBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateBucketBundleResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateBucketBundleResult updateBucketBundleResult;
    public UpdateBucketBundleResponse withUpdateBucketBundleResult(openapisdk.models.shared.UpdateBucketBundleResult updateBucketBundleResult) {
        this.updateBucketBundleResult = updateBucketBundleResult;
        return this;
    }
}