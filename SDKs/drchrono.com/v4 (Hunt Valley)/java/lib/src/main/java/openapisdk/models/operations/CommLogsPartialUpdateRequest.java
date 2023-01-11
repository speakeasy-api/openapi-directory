package openapisdk.models.operations;



public class CommLogsPartialUpdateRequest {
    public CommLogsPartialUpdatePathParams pathParams;
    public CommLogsPartialUpdateRequest withPathParams(CommLogsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CommLogsPartialUpdateQueryParams queryParams;
    public CommLogsPartialUpdateRequest withQueryParams(CommLogsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CommLogsPartialUpdateSecurity security;
    public CommLogsPartialUpdateRequest withSecurity(CommLogsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}