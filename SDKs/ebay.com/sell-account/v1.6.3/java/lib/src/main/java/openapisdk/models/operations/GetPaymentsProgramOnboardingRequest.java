package openapisdk.models.operations;



public class GetPaymentsProgramOnboardingRequest {
    public GetPaymentsProgramOnboardingPathParams pathParams;
    public GetPaymentsProgramOnboardingRequest withPathParams(GetPaymentsProgramOnboardingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentsProgramOnboardingSecurity security;
    public GetPaymentsProgramOnboardingRequest withSecurity(GetPaymentsProgramOnboardingSecurity security) {
        this.security = security;
        return this;
    }
}