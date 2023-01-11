package openapisdk.models.operations;



public class GetListPolicyTagsRequest {
    public GetListPolicyTagsQueryParams queryParams;
    public GetListPolicyTagsRequest withQueryParams(GetListPolicyTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListPolicyTagsHeaders headers;
    public GetListPolicyTagsRequest withHeaders(GetListPolicyTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
}