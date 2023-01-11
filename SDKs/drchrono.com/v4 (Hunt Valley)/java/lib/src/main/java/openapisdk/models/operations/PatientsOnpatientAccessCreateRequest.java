package openapisdk.models.operations;



public class PatientsOnpatientAccessCreateRequest {
    public PatientsOnpatientAccessCreatePathParams pathParams;
    public PatientsOnpatientAccessCreateRequest withPathParams(PatientsOnpatientAccessCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsOnpatientAccessCreateQueryParams queryParams;
    public PatientsOnpatientAccessCreateRequest withQueryParams(PatientsOnpatientAccessCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsOnpatientAccessCreateSecurity security;
    public PatientsOnpatientAccessCreateRequest withSecurity(PatientsOnpatientAccessCreateSecurity security) {
        this.security = security;
        return this;
    }
}