package openapisdk.models.operations;



public class DetachStaticIpResponse {
    public Object accessDeniedException;
    public DetachStaticIpResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DetachStaticIpResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DetachStaticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DetachStaticIpResult detachStaticIpResult;
    public DetachStaticIpResponse withDetachStaticIpResult(openapisdk.models.shared.DetachStaticIpResult detachStaticIpResult) {
        this.detachStaticIpResult = detachStaticIpResult;
        return this;
    }
    public Object invalidInputException;
    public DetachStaticIpResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DetachStaticIpResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DetachStaticIpResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DetachStaticIpResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DetachStaticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DetachStaticIpResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}