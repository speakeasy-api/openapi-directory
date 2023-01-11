package openapisdk.models.operations;



public class TimeOffRequestsDeleteRequest {
    public TimeOffRequestsDeletePathParams pathParams;
    public TimeOffRequestsDeleteRequest withPathParams(TimeOffRequestsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TimeOffRequestsDeleteQueryParams queryParams;
    public TimeOffRequestsDeleteRequest withQueryParams(TimeOffRequestsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TimeOffRequestsDeleteHeaders headers;
    public TimeOffRequestsDeleteRequest withHeaders(TimeOffRequestsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TimeOffRequestsDeleteSecurity security;
    public TimeOffRequestsDeleteRequest withSecurity(TimeOffRequestsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}