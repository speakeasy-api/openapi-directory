package openapisdk.models.operations;



public class GetFulfillmentPolicyByNameRequest {
    public GetFulfillmentPolicyByNameQueryParams queryParams;
    public GetFulfillmentPolicyByNameRequest withQueryParams(GetFulfillmentPolicyByNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFulfillmentPolicyByNameSecurity security;
    public GetFulfillmentPolicyByNameRequest withSecurity(GetFulfillmentPolicyByNameSecurity security) {
        this.security = security;
        return this;
    }
}