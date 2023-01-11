package openapisdk.models.operations;



public class GetAuditlogsRequest {
    public GetAuditlogsPathParams pathParams;
    public GetAuditlogsRequest withPathParams(GetAuditlogsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAuditlogsQueryParams queryParams;
    public GetAuditlogsRequest withQueryParams(GetAuditlogsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}