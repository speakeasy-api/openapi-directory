package openapisdk.models.operations;



public class DetachInstancesFromLoadBalancerResponse {
    public Object accessDeniedException;
    public DetachInstancesFromLoadBalancerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DetachInstancesFromLoadBalancerResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DetachInstancesFromLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetachInstancesFromLoadBalancerResult detachInstancesFromLoadBalancerResult;
    public DetachInstancesFromLoadBalancerResponse withDetachInstancesFromLoadBalancerResult(openapisdk.models.shared.DetachInstancesFromLoadBalancerResult detachInstancesFromLoadBalancerResult) {
        this.detachInstancesFromLoadBalancerResult = detachInstancesFromLoadBalancerResult;
        return this;
    }
    public Object invalidInputException;
    public DetachInstancesFromLoadBalancerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DetachInstancesFromLoadBalancerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DetachInstancesFromLoadBalancerResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DetachInstancesFromLoadBalancerResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DetachInstancesFromLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DetachInstancesFromLoadBalancerResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}