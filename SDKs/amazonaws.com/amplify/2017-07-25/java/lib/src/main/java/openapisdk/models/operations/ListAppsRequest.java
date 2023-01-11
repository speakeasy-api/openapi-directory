package openapisdk.models.operations;



public class ListAppsRequest {
    public ListAppsQueryParams queryParams;
    public ListAppsRequest withQueryParams(ListAppsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAppsHeaders headers;
    public ListAppsRequest withHeaders(ListAppsHeaders headers) {
        this.headers = headers;
        return this;
    }
}