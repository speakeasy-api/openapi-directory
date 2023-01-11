package openapisdk.models.operations;



public class SetIpAddressTypeResponse {
    public Object accessDeniedException;
    public SetIpAddressTypeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public SetIpAddressTypeResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public SetIpAddressTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public SetIpAddressTypeResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public SetIpAddressTypeResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public SetIpAddressTypeResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public SetIpAddressTypeResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public openapisdk.models.shared.SetIpAddressTypeResult setIpAddressTypeResult;
    public SetIpAddressTypeResponse withSetIpAddressTypeResult(openapisdk.models.shared.SetIpAddressTypeResult setIpAddressTypeResult) {
        this.setIpAddressTypeResult = setIpAddressTypeResult;
        return this;
    }
    public Long statusCode;
    public SetIpAddressTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public SetIpAddressTypeResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}