package openapisdk.models.operations;



public class GetInstanceMetricDataResponse {
    public Object accessDeniedException;
    public GetInstanceMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetInstanceMetricDataResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetInstanceMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceMetricDataResult getInstanceMetricDataResult;
    public GetInstanceMetricDataResponse withGetInstanceMetricDataResult(openapisdk.models.shared.GetInstanceMetricDataResult getInstanceMetricDataResult) {
        this.getInstanceMetricDataResult = getInstanceMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetInstanceMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetInstanceMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetInstanceMetricDataResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetInstanceMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetInstanceMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetInstanceMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}