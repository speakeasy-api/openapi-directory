package openapisdk.models.operations;



public class ListTagsForResourceRequest {
    public ListTagsForResourcePathParams pathParams;
    public ListTagsForResourceRequest withPathParams(ListTagsForResourcePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTagsForResourceQueryParams queryParams;
    public ListTagsForResourceRequest withQueryParams(ListTagsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTagsForResourceHeaders headers;
    public ListTagsForResourceRequest withHeaders(ListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}