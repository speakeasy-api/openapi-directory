package openapisdk.models.operations;



public class CommLogsCreateRequest {
    public CommLogsCreateQueryParams queryParams;
    public CommLogsCreateRequest withQueryParams(CommLogsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public CommLogsCreateSecurity security;
    public CommLogsCreateRequest withSecurity(CommLogsCreateSecurity security) {
        this.security = security;
        return this;
    }
}