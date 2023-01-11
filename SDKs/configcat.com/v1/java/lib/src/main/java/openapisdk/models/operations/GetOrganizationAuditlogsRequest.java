package openapisdk.models.operations;



public class GetOrganizationAuditlogsRequest {
    public GetOrganizationAuditlogsPathParams pathParams;
    public GetOrganizationAuditlogsRequest withPathParams(GetOrganizationAuditlogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetOrganizationAuditlogsQueryParams queryParams;
    public GetOrganizationAuditlogsRequest withQueryParams(GetOrganizationAuditlogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}