package openapisdk.models.operations;



public class AttachStaticIpResponse {
    public Object accessDeniedException;
    public AttachStaticIpResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public AttachStaticIpResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public openapisdk.models.shared.AttachStaticIpResult attachStaticIpResult;
    public AttachStaticIpResponse withAttachStaticIpResult(openapisdk.models.shared.AttachStaticIpResult attachStaticIpResult) {
        this.attachStaticIpResult = attachStaticIpResult;
        return this;
    }
    public String contentType;
    public AttachStaticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public AttachStaticIpResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public AttachStaticIpResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public AttachStaticIpResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public AttachStaticIpResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AttachStaticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public AttachStaticIpResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}