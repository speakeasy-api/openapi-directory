package openapisdk.models.operations;



public class DeleteBucketResponse {
    public Object accessDeniedException;
    public DeleteBucketResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBucketResult deleteBucketResult;
    public DeleteBucketResponse withDeleteBucketResult(openapisdk.models.shared.DeleteBucketResult deleteBucketResult) {
        this.deleteBucketResult = deleteBucketResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteBucketResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteBucketResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteBucketResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteBucketResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}