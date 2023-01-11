package openapisdk.models.operations;



public class CreateLoadBalancerTlsCertificateResponse {
    public Object accessDeniedException;
    public CreateLoadBalancerTlsCertificateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CreateLoadBalancerTlsCertificateResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public CreateLoadBalancerTlsCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLoadBalancerTlsCertificateResult createLoadBalancerTlsCertificateResult;
    public CreateLoadBalancerTlsCertificateResponse withCreateLoadBalancerTlsCertificateResult(openapisdk.models.shared.CreateLoadBalancerTlsCertificateResult createLoadBalancerTlsCertificateResult) {
        this.createLoadBalancerTlsCertificateResult = createLoadBalancerTlsCertificateResult;
        return this;
    }
    public Object invalidInputException;
    public CreateLoadBalancerTlsCertificateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateLoadBalancerTlsCertificateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateLoadBalancerTlsCertificateResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateLoadBalancerTlsCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateLoadBalancerTlsCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateLoadBalancerTlsCertificateResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}