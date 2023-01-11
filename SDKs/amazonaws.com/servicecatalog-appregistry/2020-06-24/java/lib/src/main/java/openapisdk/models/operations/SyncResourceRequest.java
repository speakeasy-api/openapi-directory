package openapisdk.models.operations;



public class SyncResourceRequest {
    public SyncResourcePathParams pathParams;
    public SyncResourceRequest withPathParams(SyncResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SyncResourceHeaders headers;
    public SyncResourceRequest withHeaders(SyncResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}