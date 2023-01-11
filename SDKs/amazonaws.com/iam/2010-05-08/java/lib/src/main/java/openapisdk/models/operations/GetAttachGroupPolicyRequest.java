package openapisdk.models.operations;



public class GetAttachGroupPolicyRequest {
    public GetAttachGroupPolicyQueryParams queryParams;
    public GetAttachGroupPolicyRequest withQueryParams(GetAttachGroupPolicyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAttachGroupPolicyHeaders headers;
    public GetAttachGroupPolicyRequest withHeaders(GetAttachGroupPolicyHeaders headers) {
        this.headers = headers;
        return this;
    }
}