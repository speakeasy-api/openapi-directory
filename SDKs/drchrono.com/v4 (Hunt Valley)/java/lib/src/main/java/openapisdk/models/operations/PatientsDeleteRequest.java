package openapisdk.models.operations;



public class PatientsDeleteRequest {
    public PatientsDeletePathParams pathParams;
    public PatientsDeleteRequest withPathParams(PatientsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsDeleteQueryParams queryParams;
    public PatientsDeleteRequest withQueryParams(PatientsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsDeleteSecurity security;
    public PatientsDeleteRequest withSecurity(PatientsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}