package openapisdk.models.operations;



public class MergeDeveloperIdentitiesResponse {
    public String contentType;
    public MergeDeveloperIdentitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public MergeDeveloperIdentitiesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public MergeDeveloperIdentitiesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.MergeDeveloperIdentitiesResponse mergeDeveloperIdentitiesResponse;
    public MergeDeveloperIdentitiesResponse withMergeDeveloperIdentitiesResponse(openapisdk.models.shared.MergeDeveloperIdentitiesResponse mergeDeveloperIdentitiesResponse) {
        this.mergeDeveloperIdentitiesResponse = mergeDeveloperIdentitiesResponse;
        return this;
    }
    public Object notAuthorizedException;
    public MergeDeveloperIdentitiesResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceConflictException;
    public MergeDeveloperIdentitiesResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public MergeDeveloperIdentitiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public MergeDeveloperIdentitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public MergeDeveloperIdentitiesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}