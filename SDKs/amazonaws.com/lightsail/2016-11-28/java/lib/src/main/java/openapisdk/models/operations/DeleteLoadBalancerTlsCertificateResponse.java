package openapisdk.models.operations;



public class DeleteLoadBalancerTlsCertificateResponse {
    public Object accessDeniedException;
    public DeleteLoadBalancerTlsCertificateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteLoadBalancerTlsCertificateResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteLoadBalancerTlsCertificateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLoadBalancerTlsCertificateResult deleteLoadBalancerTlsCertificateResult;
    public DeleteLoadBalancerTlsCertificateResponse withDeleteLoadBalancerTlsCertificateResult(openapisdk.models.shared.DeleteLoadBalancerTlsCertificateResult deleteLoadBalancerTlsCertificateResult) {
        this.deleteLoadBalancerTlsCertificateResult = deleteLoadBalancerTlsCertificateResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteLoadBalancerTlsCertificateResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteLoadBalancerTlsCertificateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteLoadBalancerTlsCertificateResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteLoadBalancerTlsCertificateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteLoadBalancerTlsCertificateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteLoadBalancerTlsCertificateResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}