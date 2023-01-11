package openapisdk.models.operations;



public class SyncResourceResponse {
    public Object conflictException;
    public SyncResourceResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public SyncResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public SyncResourceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public SyncResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SyncResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncResourceResponse syncResourceResponse;
    public SyncResourceResponse withSyncResourceResponse(openapisdk.models.shared.SyncResourceResponse syncResourceResponse) {
        this.syncResourceResponse = syncResourceResponse;
        return this;
    }
}