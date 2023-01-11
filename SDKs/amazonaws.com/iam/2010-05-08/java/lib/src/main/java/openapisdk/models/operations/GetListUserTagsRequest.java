package openapisdk.models.operations;



public class GetListUserTagsRequest {
    public GetListUserTagsQueryParams queryParams;
    public GetListUserTagsRequest withQueryParams(GetListUserTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListUserTagsHeaders headers;
    public GetListUserTagsRequest withHeaders(GetListUserTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}