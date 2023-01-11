package openapisdk.models.operations;



public class TendersAllRequest {
    public TendersAllQueryParams queryParams;
    public TendersAllRequest withQueryParams(TendersAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TendersAllHeaders headers;
    public TendersAllRequest withHeaders(TendersAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TendersAllSecurity security;
    public TendersAllRequest withSecurity(TendersAllSecurity security) {
        this.security = security;
        return this;
    }
}