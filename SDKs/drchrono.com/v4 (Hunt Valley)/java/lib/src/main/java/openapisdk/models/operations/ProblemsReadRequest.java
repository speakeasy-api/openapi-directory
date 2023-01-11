package openapisdk.models.operations;



public class ProblemsReadRequest {
    public ProblemsReadPathParams pathParams;
    public ProblemsReadRequest withPathParams(ProblemsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProblemsReadQueryParams queryParams;
    public ProblemsReadRequest withQueryParams(ProblemsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProblemsReadSecurity security;
    public ProblemsReadRequest withSecurity(ProblemsReadSecurity security) {
        this.security = security;
        return this;
    }
}