package openapisdk.models.operations;



public class ListApplicationsRequest {
    public ListApplicationsQueryParams queryParams;
    public ListApplicationsRequest withQueryParams(ListApplicationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListApplicationsHeaders headers;
    public ListApplicationsRequest withHeaders(ListApplicationsHeaders headers) {
        this.headers = headers;
        return this;
    }
}