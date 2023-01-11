package openapisdk.models.operations;



public class SetResourceAccessForBucketResponse {
    public Object accessDeniedException;
    public SetResourceAccessForBucketResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SetResourceAccessForBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public SetResourceAccessForBucketResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public SetResourceAccessForBucketResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public SetResourceAccessForBucketResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public openapisdk.models.shared.SetResourceAccessForBucketResult setResourceAccessForBucketResult;
    public SetResourceAccessForBucketResponse withSetResourceAccessForBucketResult(openapisdk.models.shared.SetResourceAccessForBucketResult setResourceAccessForBucketResult) {
        this.setResourceAccessForBucketResult = setResourceAccessForBucketResult;
        return this;
    }
    public Long statusCode;
    public SetResourceAccessForBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public SetResourceAccessForBucketResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}