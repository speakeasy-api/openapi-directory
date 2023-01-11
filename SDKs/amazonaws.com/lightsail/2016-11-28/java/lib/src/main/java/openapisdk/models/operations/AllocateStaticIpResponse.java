package openapisdk.models.operations;



public class AllocateStaticIpResponse {
    public Object accessDeniedException;
    public AllocateStaticIpResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public AllocateStaticIpResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public openapisdk.models.shared.AllocateStaticIpResult allocateStaticIpResult;
    public AllocateStaticIpResponse withAllocateStaticIpResult(openapisdk.models.shared.AllocateStaticIpResult allocateStaticIpResult) {
        this.allocateStaticIpResult = allocateStaticIpResult;
        return this;
    }
    public String contentType;
    public AllocateStaticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public AllocateStaticIpResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public AllocateStaticIpResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public AllocateStaticIpResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public AllocateStaticIpResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AllocateStaticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public AllocateStaticIpResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}