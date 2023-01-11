package openapisdk.models.operations;



public class CloseInstancePublicPortsResponse {
    public Object accessDeniedException;
    public CloseInstancePublicPortsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public CloseInstancePublicPortsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public openapisdk.models.shared.CloseInstancePublicPortsResult closeInstancePublicPortsResult;
    public CloseInstancePublicPortsResponse withCloseInstancePublicPortsResult(openapisdk.models.shared.CloseInstancePublicPortsResult closeInstancePublicPortsResult) {
        this.closeInstancePublicPortsResult = closeInstancePublicPortsResult;
        return this;
    }
    public String contentType;
    public CloseInstancePublicPortsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public CloseInstancePublicPortsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CloseInstancePublicPortsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CloseInstancePublicPortsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CloseInstancePublicPortsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CloseInstancePublicPortsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CloseInstancePublicPortsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}