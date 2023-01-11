package openapisdk.models.operations;



public class GetPaymentPoliciesRequest {
    public GetPaymentPoliciesQueryParams queryParams;
    public GetPaymentPoliciesRequest withQueryParams(GetPaymentPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentPoliciesSecurity security;
    public GetPaymentPoliciesRequest withSecurity(GetPaymentPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}