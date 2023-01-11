package openapisdk.models.operations;



public class GetBucketMetricDataResponse {
    public Object accessDeniedException;
    public GetBucketMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetBucketMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBucketMetricDataResult getBucketMetricDataResult;
    public GetBucketMetricDataResponse withGetBucketMetricDataResult(openapisdk.models.shared.GetBucketMetricDataResult getBucketMetricDataResult) {
        this.getBucketMetricDataResult = getBucketMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetBucketMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetBucketMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetBucketMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetBucketMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetBucketMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}