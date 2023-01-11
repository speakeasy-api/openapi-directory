package openapisdk.models.operations;



public class EnableAddOnResponse {
    public Object accessDeniedException;
    public EnableAddOnResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public EnableAddOnResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnableAddOnResult enableAddOnResult;
    public EnableAddOnResponse withEnableAddOnResult(openapisdk.models.shared.EnableAddOnResult enableAddOnResult) {
        this.enableAddOnResult = enableAddOnResult;
        return this;
    }
    public Object invalidInputException;
    public EnableAddOnResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public EnableAddOnResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public EnableAddOnResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public EnableAddOnResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public EnableAddOnResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public EnableAddOnResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}