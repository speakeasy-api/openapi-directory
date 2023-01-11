package openapisdk.models.operations;



public class ListUserImportJobsResponse {
    public String contentType;
    public ListUserImportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListUserImportJobsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListUserImportJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListUserImportJobsResponse listUserImportJobsResponse;
    public ListUserImportJobsResponse withListUserImportJobsResponse(openapisdk.models.shared.ListUserImportJobsResponse listUserImportJobsResponse) {
        this.listUserImportJobsResponse = listUserImportJobsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListUserImportJobsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListUserImportJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListUserImportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListUserImportJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}