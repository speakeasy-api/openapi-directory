package openapisdk.models.operations;



public class GetListGroupPoliciesRequest {
    public GetListGroupPoliciesQueryParams queryParams;
    public GetListGroupPoliciesRequest withQueryParams(GetListGroupPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListGroupPoliciesHeaders headers;
    public GetListGroupPoliciesRequest withHeaders(GetListGroupPoliciesHeaders headers) {
        this.headers = headers;
        return this;
    }
}