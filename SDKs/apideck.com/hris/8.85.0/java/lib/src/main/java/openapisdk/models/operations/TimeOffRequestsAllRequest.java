package openapisdk.models.operations;



public class TimeOffRequestsAllRequest {
    public TimeOffRequestsAllQueryParams queryParams;
    public TimeOffRequestsAllRequest withQueryParams(TimeOffRequestsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TimeOffRequestsAllHeaders headers;
    public TimeOffRequestsAllRequest withHeaders(TimeOffRequestsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public TimeOffRequestsAllSecurity security;
    public TimeOffRequestsAllRequest withSecurity(TimeOffRequestsAllSecurity security) {
        this.security = security;
        return this;
    }
}