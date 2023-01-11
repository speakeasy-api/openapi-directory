package openapisdk.models.operations;



public class GetListDashboardsRequest {
    public GetListDashboardsQueryParams queryParams;
    public GetListDashboardsRequest withQueryParams(GetListDashboardsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListDashboardsHeaders headers;
    public GetListDashboardsRequest withHeaders(GetListDashboardsHeaders headers) {
        this.headers = headers;
        return this;
    }
}