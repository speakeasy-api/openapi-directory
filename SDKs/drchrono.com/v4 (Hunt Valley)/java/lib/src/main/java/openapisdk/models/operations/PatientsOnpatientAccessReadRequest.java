package openapisdk.models.operations;



public class PatientsOnpatientAccessReadRequest {
    public PatientsOnpatientAccessReadPathParams pathParams;
    public PatientsOnpatientAccessReadRequest withPathParams(PatientsOnpatientAccessReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsOnpatientAccessReadQueryParams queryParams;
    public PatientsOnpatientAccessReadRequest withQueryParams(PatientsOnpatientAccessReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsOnpatientAccessReadSecurity security;
    public PatientsOnpatientAccessReadRequest withSecurity(PatientsOnpatientAccessReadSecurity security) {
        this.security = security;
        return this;
    }
}