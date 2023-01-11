package openapisdk.models.operations;



public class GetPutDashboardRequest {
    public GetPutDashboardQueryParams queryParams;
    public GetPutDashboardRequest withQueryParams(GetPutDashboardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPutDashboardHeaders headers;
    public GetPutDashboardRequest withHeaders(GetPutDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
}