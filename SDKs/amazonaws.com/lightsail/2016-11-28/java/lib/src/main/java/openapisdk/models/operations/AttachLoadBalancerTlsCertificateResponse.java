package openapisdk.models.operations;



public class AttachLoadBalancerTlsCertificateResponse {
    public Object accessDeniedException;
    public AttachLoadBalancerTlsCertificateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public AttachLoadBalancerTlsCertificateResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public openapisdk.models.shared.AttachLoadBalancerTlsCertificateResult attachLoadBalancerTlsCertificateResult;
    public AttachLoadBalancerTlsCertificateResponse withAttachLoadBalancerTlsCertificateResult(openapisdk.models.shared.AttachLoadBalancerTlsCertificateResult attachLoadBalancerTlsCertificateResult) {
        this.attachLoadBalancerTlsCertificateResult = attachLoadBalancerTlsCertificateResult;
        return this;
    }
    public String contentType;
    public AttachLoadBalancerTlsCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public AttachLoadBalancerTlsCertificateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public AttachLoadBalancerTlsCertificateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public AttachLoadBalancerTlsCertificateResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public AttachLoadBalancerTlsCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AttachLoadBalancerTlsCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public AttachLoadBalancerTlsCertificateResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}