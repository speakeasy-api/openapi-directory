package openapisdk.models.operations;



public class GetComponentPolicyRequest {
    public GetComponentPolicyQueryParams queryParams;
    public GetComponentPolicyRequest withQueryParams(GetComponentPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetComponentPolicyHeaders headers;
    public GetComponentPolicyRequest withHeaders(GetComponentPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}