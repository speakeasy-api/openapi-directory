package openapisdk.models.operations;



public class SharedLinksOneRequest {
    public SharedLinksOnePathParams pathParams;
    public SharedLinksOneRequest withPathParams(SharedLinksOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SharedLinksOneQueryParams queryParams;
    public SharedLinksOneRequest withQueryParams(SharedLinksOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SharedLinksOneHeaders headers;
    public SharedLinksOneRequest withHeaders(SharedLinksOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public SharedLinksOneSecurity security;
    public SharedLinksOneRequest withSecurity(SharedLinksOneSecurity security) {
        this.security = security;
        return this;
    }
}