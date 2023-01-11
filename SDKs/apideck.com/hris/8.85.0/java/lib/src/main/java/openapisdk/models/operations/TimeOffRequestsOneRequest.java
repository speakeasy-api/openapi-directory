package openapisdk.models.operations;



public class TimeOffRequestsOneRequest {
    public TimeOffRequestsOnePathParams pathParams;
    public TimeOffRequestsOneRequest withPathParams(TimeOffRequestsOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TimeOffRequestsOneQueryParams queryParams;
    public TimeOffRequestsOneRequest withQueryParams(TimeOffRequestsOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TimeOffRequestsOneHeaders headers;
    public TimeOffRequestsOneRequest withHeaders(TimeOffRequestsOneHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TimeOffRequestsOneSecurity security;
    public TimeOffRequestsOneRequest withSecurity(TimeOffRequestsOneSecurity security) {
        this.security = security;
        return this;
    }
}