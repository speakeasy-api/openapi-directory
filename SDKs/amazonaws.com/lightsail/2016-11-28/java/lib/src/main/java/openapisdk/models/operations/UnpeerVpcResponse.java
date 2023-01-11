package openapisdk.models.operations;



public class UnpeerVpcResponse {
    public Object accessDeniedException;
    public UnpeerVpcResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public UnpeerVpcResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public UnpeerVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UnpeerVpcResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UnpeerVpcResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UnpeerVpcResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UnpeerVpcResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UnpeerVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UnpeerVpcResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UnpeerVpcResult unpeerVpcResult;
    public UnpeerVpcResponse withUnpeerVpcResult(openapisdk.models.shared.UnpeerVpcResult unpeerVpcResult) {
        this.unpeerVpcResult = unpeerVpcResult;
        return this;
    }
}