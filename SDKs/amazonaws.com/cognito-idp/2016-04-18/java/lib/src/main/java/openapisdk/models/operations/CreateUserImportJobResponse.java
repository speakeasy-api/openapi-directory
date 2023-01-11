package openapisdk.models.operations;



public class CreateUserImportJobResponse {
    public String contentType;
    public CreateUserImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUserImportJobResponse createUserImportJobResponse;
    public CreateUserImportJobResponse withCreateUserImportJobResponse(openapisdk.models.shared.CreateUserImportJobResponse createUserImportJobResponse) {
        this.createUserImportJobResponse = createUserImportJobResponse;
        return this;
    }
    public Object internalErrorException;
    public CreateUserImportJobResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateUserImportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateUserImportJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public CreateUserImportJobResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object preconditionNotMetException;
    public CreateUserImportJobResponse withPreconditionNotMetException(Object preconditionNotMetException) {
        this.preconditionNotMetException = preconditionNotMetException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateUserImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateUserImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateUserImportJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}