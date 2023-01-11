package openapisdk.models.operations;



public class StopUserImportJobResponse {
    public String contentType;
    public StopUserImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public StopUserImportJobResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public StopUserImportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public StopUserImportJobResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object preconditionNotMetException;
    public StopUserImportJobResponse withPreconditionNotMetException(Object preconditionNotMetException) {
        this.preconditionNotMetException = preconditionNotMetException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopUserImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopUserImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopUserImportJobResponse stopUserImportJobResponse;
    public StopUserImportJobResponse withStopUserImportJobResponse(openapisdk.models.shared.StopUserImportJobResponse stopUserImportJobResponse) {
        this.stopUserImportJobResponse = stopUserImportJobResponse;
        return this;
    }
    public Object tooManyRequestsException;
    public StopUserImportJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}