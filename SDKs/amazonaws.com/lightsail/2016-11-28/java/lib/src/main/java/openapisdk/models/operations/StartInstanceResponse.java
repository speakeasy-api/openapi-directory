package openapisdk.models.operations;



public class StartInstanceResponse {
    public Object accessDeniedException;
    public StartInstanceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public StartInstanceResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public StartInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public StartInstanceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public StartInstanceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public StartInstanceResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public StartInstanceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public openapisdk.models.shared.StartInstanceResult startInstanceResult;
    public StartInstanceResponse withStartInstanceResult(openapisdk.models.shared.StartInstanceResult startInstanceResult) {
        this.startInstanceResult = startInstanceResult;
        return this;
    }
    public Long statusCode;
    public StartInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public StartInstanceResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}