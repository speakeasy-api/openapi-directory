package openapisdk.models.operations;



public class AttachInstancesToLoadBalancerResponse {
    public Object accessDeniedException;
    public AttachInstancesToLoadBalancerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public AttachInstancesToLoadBalancerResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public openapisdk.models.shared.AttachInstancesToLoadBalancerResult attachInstancesToLoadBalancerResult;
    public AttachInstancesToLoadBalancerResponse withAttachInstancesToLoadBalancerResult(openapisdk.models.shared.AttachInstancesToLoadBalancerResult attachInstancesToLoadBalancerResult) {
        this.attachInstancesToLoadBalancerResult = attachInstancesToLoadBalancerResult;
        return this;
    }
    public String contentType;
    public AttachInstancesToLoadBalancerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public AttachInstancesToLoadBalancerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public AttachInstancesToLoadBalancerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public AttachInstancesToLoadBalancerResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public AttachInstancesToLoadBalancerResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AttachInstancesToLoadBalancerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public AttachInstancesToLoadBalancerResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}