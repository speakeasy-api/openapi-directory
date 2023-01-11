package openapisdk.models.operations;



public class GetFulfillmentPoliciesRequest {
    public GetFulfillmentPoliciesQueryParams queryParams;
    public GetFulfillmentPoliciesRequest withQueryParams(GetFulfillmentPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFulfillmentPoliciesSecurity security;
    public GetFulfillmentPoliciesRequest withSecurity(GetFulfillmentPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}