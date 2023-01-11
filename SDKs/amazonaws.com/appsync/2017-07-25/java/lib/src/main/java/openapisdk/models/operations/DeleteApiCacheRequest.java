package openapisdk.models.operations;



public class DeleteApiCacheRequest {
    public DeleteApiCachePathParams pathParams;
    public DeleteApiCacheRequest withPathParams(DeleteApiCachePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteApiCacheHeaders headers;
    public DeleteApiCacheRequest withHeaders(DeleteApiCacheHeaders headers) {
        this.headers = headers;
        return this;
    }
}