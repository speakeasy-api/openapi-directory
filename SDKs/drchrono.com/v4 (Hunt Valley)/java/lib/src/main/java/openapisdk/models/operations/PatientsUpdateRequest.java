package openapisdk.models.operations;



public class PatientsUpdateRequest {
    public PatientsUpdatePathParams pathParams;
    public PatientsUpdateRequest withPathParams(PatientsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsUpdateQueryParams queryParams;
    public PatientsUpdateRequest withQueryParams(PatientsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsUpdateSecurity security;
    public PatientsUpdateRequest withSecurity(PatientsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}