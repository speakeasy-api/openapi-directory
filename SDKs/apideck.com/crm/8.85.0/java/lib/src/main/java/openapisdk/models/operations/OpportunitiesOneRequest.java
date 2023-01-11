package openapisdk.models.operations;



public class OpportunitiesOneRequest {
    public OpportunitiesOnePathParams pathParams;
    public OpportunitiesOneRequest withPathParams(OpportunitiesOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OpportunitiesOneQueryParams queryParams;
    public OpportunitiesOneRequest withQueryParams(OpportunitiesOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public OpportunitiesOneHeaders headers;
    public OpportunitiesOneRequest withHeaders(OpportunitiesOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public OpportunitiesOneSecurity security;
    public OpportunitiesOneRequest withSecurity(OpportunitiesOneSecurity security) {
        this.security = security;
        return this;
    }
}