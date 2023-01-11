package openapisdk.models.operations;



public class DeleteContactMethodResponse {
    public Object accessDeniedException;
    public DeleteContactMethodResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteContactMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteContactMethodResult deleteContactMethodResult;
    public DeleteContactMethodResponse withDeleteContactMethodResult(openapisdk.models.shared.DeleteContactMethodResult deleteContactMethodResult) {
        this.deleteContactMethodResult = deleteContactMethodResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteContactMethodResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteContactMethodResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteContactMethodResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteContactMethodResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteContactMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteContactMethodResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}