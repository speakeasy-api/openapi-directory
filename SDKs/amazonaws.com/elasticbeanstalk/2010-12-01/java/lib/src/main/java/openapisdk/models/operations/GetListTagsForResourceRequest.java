package openapisdk.models.operations;



public class GetListTagsForResourceRequest {
    public GetListTagsForResourceQueryParams queryParams;
    public GetListTagsForResourceRequest withQueryParams(GetListTagsForResourceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListTagsForResourceHeaders headers;
    public GetListTagsForResourceRequest withHeaders(GetListTagsForResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
}