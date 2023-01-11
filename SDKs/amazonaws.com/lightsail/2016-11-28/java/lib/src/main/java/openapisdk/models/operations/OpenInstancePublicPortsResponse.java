package openapisdk.models.operations;



public class OpenInstancePublicPortsResponse {
    public Object accessDeniedException;
    public OpenInstancePublicPortsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public OpenInstancePublicPortsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public OpenInstancePublicPortsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public OpenInstancePublicPortsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public OpenInstancePublicPortsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.OpenInstancePublicPortsResult openInstancePublicPortsResult;
    public OpenInstancePublicPortsResponse withOpenInstancePublicPortsResult(openapisdk.models.shared.OpenInstancePublicPortsResult openInstancePublicPortsResult) {
        this.openInstancePublicPortsResult = openInstancePublicPortsResult;
        return this;
    }
    public Object operationFailureException;
    public OpenInstancePublicPortsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public OpenInstancePublicPortsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public OpenInstancePublicPortsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public OpenInstancePublicPortsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}