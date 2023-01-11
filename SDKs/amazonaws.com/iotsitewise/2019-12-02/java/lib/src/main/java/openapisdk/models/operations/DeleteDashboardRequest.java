package openapisdk.models.operations;



public class DeleteDashboardRequest {
    public DeleteDashboardPathParams pathParams;
    public DeleteDashboardRequest withPathParams(DeleteDashboardPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteDashboardQueryParams queryParams;
    public DeleteDashboardRequest withQueryParams(DeleteDashboardQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeleteDashboardHeaders headers;
    public DeleteDashboardRequest withHeaders(DeleteDashboardHeaders headers) {
        this.headers = headers;
        return this;
    }
}