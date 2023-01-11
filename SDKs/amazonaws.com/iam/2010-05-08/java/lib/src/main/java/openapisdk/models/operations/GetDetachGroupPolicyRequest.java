package openapisdk.models.operations;



public class GetDetachGroupPolicyRequest {
    public GetDetachGroupPolicyQueryParams queryParams;
    public GetDetachGroupPolicyRequest withQueryParams(GetDetachGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetDetachGroupPolicyHeaders headers;
    public GetDetachGroupPolicyRequest withHeaders(GetDetachGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}