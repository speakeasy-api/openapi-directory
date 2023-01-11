package openapisdk.models.operations;



public class GetGetPolicyRequest {
    public GetGetPolicyQueryParams queryParams;
    public GetGetPolicyRequest withQueryParams(GetGetPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetGetPolicyHeaders headers;
    public GetGetPolicyRequest withHeaders(GetGetPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}