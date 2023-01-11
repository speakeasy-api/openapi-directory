package openapisdk.models.operations;



public class GetBucketBundlesResponse {
    public Object accessDeniedException;
    public GetBucketBundlesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetBucketBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBucketBundlesResult getBucketBundlesResult;
    public GetBucketBundlesResponse withGetBucketBundlesResult(openapisdk.models.shared.GetBucketBundlesResult getBucketBundlesResult) {
        this.getBucketBundlesResult = getBucketBundlesResult;
        return this;
    }
    public Object invalidInputException;
    public GetBucketBundlesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceException;
    public GetBucketBundlesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetBucketBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetBucketBundlesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}