package openapisdk.models.operations;



public class ListNodegroupsRequest {
    public ListNodegroupsPathParams pathParams;
    public ListNodegroupsRequest withPathParams(ListNodegroupsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListNodegroupsQueryParams queryParams;
    public ListNodegroupsRequest withQueryParams(ListNodegroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNodegroupsHeaders headers;
    public ListNodegroupsRequest withHeaders(ListNodegroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
}