package openapisdk.models.operations;



public class GetPaymentPolicyByNameRequest {
    public GetPaymentPolicyByNameQueryParams queryParams;
    public GetPaymentPolicyByNameRequest withQueryParams(GetPaymentPolicyByNameQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetPaymentPolicyByNameSecurity security;
    public GetPaymentPolicyByNameRequest withSecurity(GetPaymentPolicyByNameSecurity security) {
        this.security = security;
        return this;
    }
}