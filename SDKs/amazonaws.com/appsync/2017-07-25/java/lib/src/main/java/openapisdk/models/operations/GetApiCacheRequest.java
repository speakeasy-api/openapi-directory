package openapisdk.models.operations;



public class GetApiCacheRequest {
    public GetApiCachePathParams pathParams;
    public GetApiCacheRequest withPathParams(GetApiCachePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetApiCacheHeaders headers;
    public GetApiCacheRequest withHeaders(GetApiCacheHeaders headers) {
        this.headers = headers;
        return this;
    }
}