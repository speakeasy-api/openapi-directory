package openapisdk.models.operations;



public class PatientsPartialUpdateRequest {
    public PatientsPartialUpdatePathParams pathParams;
    public PatientsPartialUpdateRequest withPathParams(PatientsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsPartialUpdateQueryParams queryParams;
    public PatientsPartialUpdateRequest withQueryParams(PatientsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsPartialUpdateSecurity security;
    public PatientsPartialUpdateRequest withSecurity(PatientsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}