package openapisdk.models.operations;



public class CreateContactMethodResponse {
    public Object accessDeniedException;
    public CreateContactMethodResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateContactMethodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContactMethodResult createContactMethodResult;
    public CreateContactMethodResponse withCreateContactMethodResult(openapisdk.models.shared.CreateContactMethodResult createContactMethodResult) {
        this.createContactMethodResult = createContactMethodResult;
        return this;
    }
    public Object invalidInputException;
    public CreateContactMethodResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateContactMethodResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public CreateContactMethodResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public CreateContactMethodResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateContactMethodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateContactMethodResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}