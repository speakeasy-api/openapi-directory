package openapisdk.models.operations;



public class CreateBucketResponse {
    public Object accessDeniedException;
    public CreateBucketResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateBucketResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBucketResult createBucketResult;
    public CreateBucketResponse withCreateBucketResult(openapisdk.models.shared.CreateBucketResult createBucketResult) {
        this.createBucketResult = createBucketResult;
        return this;
    }
    public Object invalidInputException;
    public CreateBucketResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceException;
    public CreateBucketResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateBucketResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateBucketResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}