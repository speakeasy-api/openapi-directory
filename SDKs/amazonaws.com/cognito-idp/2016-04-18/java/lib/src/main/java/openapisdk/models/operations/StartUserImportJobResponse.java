package openapisdk.models.operations;



public class StartUserImportJobResponse {
    public String contentType;
    public StartUserImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public StartUserImportJobResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public StartUserImportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public StartUserImportJobResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object preconditionNotMetException;
    public StartUserImportJobResponse withPreconditionNotMetException(Object preconditionNotMetException) {
        this.preconditionNotMetException = preconditionNotMetException;
        return this;
    }
    public Object resourceNotFoundException;
    public StartUserImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.StartUserImportJobResponse startUserImportJobResponse;
    public StartUserImportJobResponse withStartUserImportJobResponse(openapisdk.models.shared.StartUserImportJobResponse startUserImportJobResponse) {
        this.startUserImportJobResponse = startUserImportJobResponse;
        return this;
    }
    public Long statusCode;
    public StartUserImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public StartUserImportJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}