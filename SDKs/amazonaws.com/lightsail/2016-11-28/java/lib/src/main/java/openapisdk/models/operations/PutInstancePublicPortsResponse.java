package openapisdk.models.operations;



public class PutInstancePublicPortsResponse {
    public Object accessDeniedException;
    public PutInstancePublicPortsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public PutInstancePublicPortsResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public PutInstancePublicPortsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public PutInstancePublicPortsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public PutInstancePublicPortsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public PutInstancePublicPortsResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public openapisdk.models.shared.PutInstancePublicPortsResult putInstancePublicPortsResult;
    public PutInstancePublicPortsResponse withPutInstancePublicPortsResult(openapisdk.models.shared.PutInstancePublicPortsResult putInstancePublicPortsResult) {
        this.putInstancePublicPortsResult = putInstancePublicPortsResult;
        return this;
    }
    public Object serviceException;
    public PutInstancePublicPortsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutInstancePublicPortsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public PutInstancePublicPortsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}