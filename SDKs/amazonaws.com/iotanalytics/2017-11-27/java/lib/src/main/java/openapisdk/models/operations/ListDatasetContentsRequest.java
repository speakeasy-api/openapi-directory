package openapisdk.models.operations;



public class ListDatasetContentsRequest {
    public ListDatasetContentsPathParams pathParams;
    public ListDatasetContentsRequest withPathParams(ListDatasetContentsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListDatasetContentsQueryParams queryParams;
    public ListDatasetContentsRequest withQueryParams(ListDatasetContentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDatasetContentsHeaders headers;
    public ListDatasetContentsRequest withHeaders(ListDatasetContentsHeaders headers) {
        this.headers = headers;
        return this;
    }
}