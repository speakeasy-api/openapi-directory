package openapisdk.models.operations;



public class AmendmentsPartialUpdateRequest {
    public AmendmentsPartialUpdatePathParams pathParams;
    public AmendmentsPartialUpdateRequest withPathParams(AmendmentsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AmendmentsPartialUpdateQueryParams queryParams;
    public AmendmentsPartialUpdateRequest withQueryParams(AmendmentsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AmendmentsPartialUpdateSecurity security;
    public AmendmentsPartialUpdateRequest withSecurity(AmendmentsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}