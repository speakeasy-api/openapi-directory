package openapisdk.models.operations;



public class GetLoadBalancerMetricDataResponse {
    public Object accessDeniedException;
    public GetLoadBalancerMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetLoadBalancerMetricDataResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetLoadBalancerMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoadBalancerMetricDataResult getLoadBalancerMetricDataResult;
    public GetLoadBalancerMetricDataResponse withGetLoadBalancerMetricDataResult(openapisdk.models.shared.GetLoadBalancerMetricDataResult getLoadBalancerMetricDataResult) {
        this.getLoadBalancerMetricDataResult = getLoadBalancerMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetLoadBalancerMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetLoadBalancerMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetLoadBalancerMetricDataResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetLoadBalancerMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancerMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetLoadBalancerMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}