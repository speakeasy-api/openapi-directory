package openapisdk.models.operations;



public class ListDashboardsRequest {
    public ListDashboardsQueryParams queryParams;
    public ListDashboardsRequest withQueryParams(ListDashboardsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDashboardsHeaders headers;
    public ListDashboardsRequest withHeaders(ListDashboardsHeaders headers) {
        this.headers = headers;
        return this;
    }
}