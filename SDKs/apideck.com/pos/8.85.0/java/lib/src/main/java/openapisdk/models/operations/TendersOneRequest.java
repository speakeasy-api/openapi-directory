package openapisdk.models.operations;



public class TendersOneRequest {
    public TendersOnePathParams pathParams;
    public TendersOneRequest withPathParams(TendersOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TendersOneQueryParams queryParams;
    public TendersOneRequest withQueryParams(TendersOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TendersOneHeaders headers;
    public TendersOneRequest withHeaders(TendersOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TendersOneSecurity security;
    public TendersOneRequest withSecurity(TendersOneSecurity security) {
        this.security = security;
        return this;
    }
}