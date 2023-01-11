package openapisdk.models.operations;



public class GetAdministratorAccountResponse {
    public String contentType;
    public GetAdministratorAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAdministratorAccountResponse getAdministratorAccountResponse;
    public GetAdministratorAccountResponse withGetAdministratorAccountResponse(openapisdk.models.shared.GetAdministratorAccountResponse getAdministratorAccountResponse) {
        this.getAdministratorAccountResponse = getAdministratorAccountResponse;
        return this;
    }
    public Object internalException;
    public GetAdministratorAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetAdministratorAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetAdministratorAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetAdministratorAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAdministratorAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAdministratorAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}