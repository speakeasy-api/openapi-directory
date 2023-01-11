package openapisdk.models.operations;



public class AmendmentsCreateRequest {
    public AmendmentsCreateQueryParams queryParams;
    public AmendmentsCreateRequest withQueryParams(AmendmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsCreateSecurity security;
    public AmendmentsCreateRequest withSecurity(AmendmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}