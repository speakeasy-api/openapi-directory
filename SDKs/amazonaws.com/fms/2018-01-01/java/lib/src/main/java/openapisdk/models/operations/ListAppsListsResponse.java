package openapisdk.models.operations;



public class ListAppsListsResponse {
    public String contentType;
    public ListAppsListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListAppsListsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public ListAppsListsResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object limitExceededException;
    public ListAppsListsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListAppsListsResponse listAppsListsResponse;
    public ListAppsListsResponse withListAppsListsResponse(openapisdk.models.shared.ListAppsListsResponse listAppsListsResponse) {
        this.listAppsListsResponse = listAppsListsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAppsListsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAppsListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}