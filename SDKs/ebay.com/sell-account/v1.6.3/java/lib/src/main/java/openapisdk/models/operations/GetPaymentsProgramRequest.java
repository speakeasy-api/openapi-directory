package openapisdk.models.operations;



public class GetPaymentsProgramRequest {
    public GetPaymentsProgramPathParams pathParams;
    public GetPaymentsProgramRequest withPathParams(GetPaymentsProgramPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPaymentsProgramSecurity security;
    public GetPaymentsProgramRequest withSecurity(GetPaymentsProgramSecurity security) {
        this.security = security;
        return this;
    }
}