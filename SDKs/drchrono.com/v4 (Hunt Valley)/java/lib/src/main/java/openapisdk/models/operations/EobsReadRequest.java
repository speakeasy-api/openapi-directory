package openapisdk.models.operations;



public class EobsReadRequest {
    public EobsReadPathParams pathParams;
    public EobsReadRequest withPathParams(EobsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public EobsReadQueryParams queryParams;
    public EobsReadRequest withQueryParams(EobsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EobsReadSecurity security;
    public EobsReadRequest withSecurity(EobsReadSecurity security) {
        this.security = security;
        return this;
    }
}