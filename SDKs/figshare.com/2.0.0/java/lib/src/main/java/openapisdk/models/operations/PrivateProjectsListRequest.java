package openapisdk.models.operations;



public class PrivateProjectsListRequest {
    public PrivateProjectsListQueryParams queryParams;
    public PrivateProjectsListRequest withQueryParams(PrivateProjectsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PrivateProjectsListSecurity security;
    public PrivateProjectsListRequest withSecurity(PrivateProjectsListSecurity security) {
        this.security = security;
        return this;
    }
}