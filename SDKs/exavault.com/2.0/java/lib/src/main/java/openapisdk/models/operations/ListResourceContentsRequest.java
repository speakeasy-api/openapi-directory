package openapisdk.models.operations;



public class ListResourceContentsRequest {
    public ListResourceContentsPathParams pathParams;
    public ListResourceContentsRequest withPathParams(ListResourceContentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListResourceContentsQueryParams queryParams;
    public ListResourceContentsRequest withQueryParams(ListResourceContentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListResourceContentsHeaders headers;
    public ListResourceContentsRequest withHeaders(ListResourceContentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}