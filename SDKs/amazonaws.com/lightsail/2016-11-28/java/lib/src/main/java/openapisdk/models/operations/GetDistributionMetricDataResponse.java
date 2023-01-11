package openapisdk.models.operations;



public class GetDistributionMetricDataResponse {
    public Object accessDeniedException;
    public GetDistributionMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDistributionMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDistributionMetricDataResult getDistributionMetricDataResult;
    public GetDistributionMetricDataResponse withGetDistributionMetricDataResult(openapisdk.models.shared.GetDistributionMetricDataResult getDistributionMetricDataResult) {
        this.getDistributionMetricDataResult = getDistributionMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetDistributionMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetDistributionMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetDistributionMetricDataResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetDistributionMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDistributionMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetDistributionMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}