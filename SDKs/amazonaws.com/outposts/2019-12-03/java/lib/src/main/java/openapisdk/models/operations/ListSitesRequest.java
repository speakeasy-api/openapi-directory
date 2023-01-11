package openapisdk.models.operations;



public class ListSitesRequest {
    public ListSitesQueryParams queryParams;
    public ListSitesRequest withQueryParams(ListSitesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSitesHeaders headers;
    public ListSitesRequest withHeaders(ListSitesHeaders headers) {
        this.headers = headers;
        return this;
    }
}