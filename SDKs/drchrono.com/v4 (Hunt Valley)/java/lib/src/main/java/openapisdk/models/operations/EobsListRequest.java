package openapisdk.models.operations;



public class EobsListRequest {
    public EobsListQueryParams queryParams;
    public EobsListRequest withQueryParams(EobsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public EobsListSecurity security;
    public EobsListRequest withSecurity(EobsListSecurity security) {
        this.security = security;
        return this;
    }
}