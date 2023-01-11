package openapisdk.models.operations;



public class TendersDeleteRequest {
    public TendersDeletePathParams pathParams;
    public TendersDeleteRequest withPathParams(TendersDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TendersDeleteQueryParams queryParams;
    public TendersDeleteRequest withQueryParams(TendersDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TendersDeleteHeaders headers;
    public TendersDeleteRequest withHeaders(TendersDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TendersDeleteSecurity security;
    public TendersDeleteRequest withSecurity(TendersDeleteSecurity security) {
        this.security = security;
        return this;
    }
}