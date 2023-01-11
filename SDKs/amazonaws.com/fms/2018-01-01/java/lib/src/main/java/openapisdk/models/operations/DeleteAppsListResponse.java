package openapisdk.models.operations;



public class DeleteAppsListResponse {
    public String contentType;
    public DeleteAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public DeleteAppsListResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public DeleteAppsListResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAppsListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}