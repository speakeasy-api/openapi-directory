package openapisdk.models.operations;



public class GetListQueueTagsRequest {
    public GetListQueueTagsPathParams pathParams;
    public GetListQueueTagsRequest withPathParams(GetListQueueTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListQueueTagsQueryParams queryParams;
    public GetListQueueTagsRequest withQueryParams(GetListQueueTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListQueueTagsHeaders headers;
    public GetListQueueTagsRequest withHeaders(GetListQueueTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}