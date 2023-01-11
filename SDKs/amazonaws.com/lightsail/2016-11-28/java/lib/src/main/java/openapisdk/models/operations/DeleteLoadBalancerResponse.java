package openapisdk.models.operations;



public class DeleteLoadBalancerResponse {
    public Object accessDeniedException;
    public DeleteLoadBalancerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteLoadBalancerResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLoadBalancerResult deleteLoadBalancerResult;
    public DeleteLoadBalancerResponse withDeleteLoadBalancerResult(openapisdk.models.shared.DeleteLoadBalancerResult deleteLoadBalancerResult) {
        this.deleteLoadBalancerResult = deleteLoadBalancerResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteLoadBalancerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteLoadBalancerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteLoadBalancerResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteLoadBalancerResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteLoadBalancerResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}