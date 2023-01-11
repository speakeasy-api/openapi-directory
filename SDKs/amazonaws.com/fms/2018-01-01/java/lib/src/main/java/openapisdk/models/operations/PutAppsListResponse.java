package openapisdk.models.operations;



public class PutAppsListResponse {
    public String contentType;
    public PutAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public PutAppsListResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public PutAppsListResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public PutAppsListResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object limitExceededException;
    public PutAppsListResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutAppsListResponse putAppsListResponse;
    public PutAppsListResponse withPutAppsListResponse(openapisdk.models.shared.PutAppsListResponse putAppsListResponse) {
        this.putAppsListResponse = putAppsListResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutAppsListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}