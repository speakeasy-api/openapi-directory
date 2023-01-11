package openapisdk.models.operations;



public class GetAppsListResponse {
    public String contentType;
    public GetAppsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppsListResponse getAppsListResponse;
    public GetAppsListResponse withGetAppsListResponse(openapisdk.models.shared.GetAppsListResponse getAppsListResponse) {
        this.getAppsListResponse = getAppsListResponse;
        return this;
    }
    public Object internalErrorException;
    public GetAppsListResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public GetAppsListResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAppsListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAppsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}