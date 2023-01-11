package openapisdk.models.operations;



public class ProblemsPartialUpdateRequest {
    public ProblemsPartialUpdatePathParams pathParams;
    public ProblemsPartialUpdateRequest withPathParams(ProblemsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ProblemsPartialUpdateQueryParams queryParams;
    public ProblemsPartialUpdateRequest withQueryParams(ProblemsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProblemsPartialUpdateSecurity security;
    public ProblemsPartialUpdateRequest withSecurity(ProblemsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}