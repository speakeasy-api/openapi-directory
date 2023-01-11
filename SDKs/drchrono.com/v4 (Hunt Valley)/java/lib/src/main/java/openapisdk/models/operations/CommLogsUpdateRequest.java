package openapisdk.models.operations;



public class CommLogsUpdateRequest {
    public CommLogsUpdatePathParams pathParams;
    public CommLogsUpdateRequest withPathParams(CommLogsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CommLogsUpdateQueryParams queryParams;
    public CommLogsUpdateRequest withQueryParams(CommLogsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CommLogsUpdateSecurity security;
    public CommLogsUpdateRequest withSecurity(CommLogsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}