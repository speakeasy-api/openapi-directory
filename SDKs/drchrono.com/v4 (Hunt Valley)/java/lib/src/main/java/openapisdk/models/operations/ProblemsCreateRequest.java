package openapisdk.models.operations;



public class ProblemsCreateRequest {
    public ProblemsCreateQueryParams queryParams;
    public ProblemsCreateRequest withQueryParams(ProblemsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProblemsCreateSecurity security;
    public ProblemsCreateRequest withSecurity(ProblemsCreateSecurity security) {
        this.security = security;
        return this;
    }
}