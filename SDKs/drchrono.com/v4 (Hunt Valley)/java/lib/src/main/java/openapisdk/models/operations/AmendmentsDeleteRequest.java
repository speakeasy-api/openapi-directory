package openapisdk.models.operations;



public class AmendmentsDeleteRequest {
    public AmendmentsDeletePathParams pathParams;
    public AmendmentsDeleteRequest withPathParams(AmendmentsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AmendmentsDeleteQueryParams queryParams;
    public AmendmentsDeleteRequest withQueryParams(AmendmentsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsDeleteSecurity security;
    public AmendmentsDeleteRequest withSecurity(AmendmentsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}