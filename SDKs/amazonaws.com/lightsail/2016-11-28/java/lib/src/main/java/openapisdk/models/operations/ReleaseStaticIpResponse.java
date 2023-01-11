package openapisdk.models.operations;



public class ReleaseStaticIpResponse {
    public Object accessDeniedException;
    public ReleaseStaticIpResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public ReleaseStaticIpResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public ReleaseStaticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ReleaseStaticIpResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public ReleaseStaticIpResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public ReleaseStaticIpResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public openapisdk.models.shared.ReleaseStaticIpResult releaseStaticIpResult;
    public ReleaseStaticIpResponse withReleaseStaticIpResult(openapisdk.models.shared.ReleaseStaticIpResult releaseStaticIpResult) {
        this.releaseStaticIpResult = releaseStaticIpResult;
        return this;
    }
    public Object serviceException;
    public ReleaseStaticIpResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ReleaseStaticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public ReleaseStaticIpResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}