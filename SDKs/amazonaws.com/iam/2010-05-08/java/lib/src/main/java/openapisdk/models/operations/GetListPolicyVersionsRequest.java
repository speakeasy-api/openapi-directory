package openapisdk.models.operations;



public class GetListPolicyVersionsRequest {
    public GetListPolicyVersionsQueryParams queryParams;
    public GetListPolicyVersionsRequest withQueryParams(GetListPolicyVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListPolicyVersionsHeaders headers;
    public GetListPolicyVersionsRequest withHeaders(GetListPolicyVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
}