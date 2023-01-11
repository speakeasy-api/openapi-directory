package openapisdk.models.operations;



public class GetLoadBalancerTlsCertificatesResponse {
    public Object accessDeniedException;
    public GetLoadBalancerTlsCertificatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetLoadBalancerTlsCertificatesResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetLoadBalancerTlsCertificatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoadBalancerTlsCertificatesResult getLoadBalancerTlsCertificatesResult;
    public GetLoadBalancerTlsCertificatesResponse withGetLoadBalancerTlsCertificatesResult(openapisdk.models.shared.GetLoadBalancerTlsCertificatesResult getLoadBalancerTlsCertificatesResult) {
        this.getLoadBalancerTlsCertificatesResult = getLoadBalancerTlsCertificatesResult;
        return this;
    }
    public Object invalidInputException;
    public GetLoadBalancerTlsCertificatesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetLoadBalancerTlsCertificatesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetLoadBalancerTlsCertificatesResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetLoadBalancerTlsCertificatesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetLoadBalancerTlsCertificatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetLoadBalancerTlsCertificatesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}