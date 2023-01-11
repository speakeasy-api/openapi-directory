package openapisdk.models.operations;



public class GetPutGroupPolicyRequest {
    public GetPutGroupPolicyQueryParams queryParams;
    public GetPutGroupPolicyRequest withQueryParams(GetPutGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPutGroupPolicyHeaders headers;
    public GetPutGroupPolicyRequest withHeaders(GetPutGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}