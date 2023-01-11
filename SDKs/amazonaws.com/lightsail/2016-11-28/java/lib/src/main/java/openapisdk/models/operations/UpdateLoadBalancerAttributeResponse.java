package openapisdk.models.operations;



public class UpdateLoadBalancerAttributeResponse {
    public Object accessDeniedException;
    public UpdateLoadBalancerAttributeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public UpdateLoadBalancerAttributeResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public UpdateLoadBalancerAttributeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateLoadBalancerAttributeResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateLoadBalancerAttributeResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UpdateLoadBalancerAttributeResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UpdateLoadBalancerAttributeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateLoadBalancerAttributeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateLoadBalancerAttributeResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateLoadBalancerAttributeResult updateLoadBalancerAttributeResult;
    public UpdateLoadBalancerAttributeResponse withUpdateLoadBalancerAttributeResult(openapisdk.models.shared.UpdateLoadBalancerAttributeResult updateLoadBalancerAttributeResult) {
        this.updateLoadBalancerAttributeResult = updateLoadBalancerAttributeResult;
        return this;
    }
}