package openapisdk.models.operations;



public class AmendmentsUpdateRequest {
    public AmendmentsUpdatePathParams pathParams;
    public AmendmentsUpdateRequest withPathParams(AmendmentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AmendmentsUpdateQueryParams queryParams;
    public AmendmentsUpdateRequest withQueryParams(AmendmentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsUpdateSecurity security;
    public AmendmentsUpdateRequest withSecurity(AmendmentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}