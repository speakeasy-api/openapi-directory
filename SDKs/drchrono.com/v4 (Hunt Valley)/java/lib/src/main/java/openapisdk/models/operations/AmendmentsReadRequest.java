package openapisdk.models.operations;



public class AmendmentsReadRequest {
    public AmendmentsReadPathParams pathParams;
    public AmendmentsReadRequest withPathParams(AmendmentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AmendmentsReadQueryParams queryParams;
    public AmendmentsReadRequest withQueryParams(AmendmentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsReadSecurity security;
    public AmendmentsReadRequest withSecurity(AmendmentsReadSecurity security) {
        this.security = security;
        return this;
    }
}