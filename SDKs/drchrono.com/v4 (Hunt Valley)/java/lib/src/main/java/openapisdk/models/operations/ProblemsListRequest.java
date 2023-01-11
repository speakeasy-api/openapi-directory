package openapisdk.models.operations;



public class ProblemsListRequest {
    public ProblemsListQueryParams queryParams;
    public ProblemsListRequest withQueryParams(ProblemsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ProblemsListSecurity security;
    public ProblemsListRequest withSecurity(ProblemsListSecurity security) {
        this.security = security;
        return this;
    }
}