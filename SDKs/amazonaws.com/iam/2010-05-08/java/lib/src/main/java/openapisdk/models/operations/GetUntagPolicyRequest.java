package openapisdk.models.operations;



public class GetUntagPolicyRequest {
    public GetUntagPolicyQueryParams queryParams;
    public GetUntagPolicyRequest withQueryParams(GetUntagPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetUntagPolicyHeaders headers;
    public GetUntagPolicyRequest withHeaders(GetUntagPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}