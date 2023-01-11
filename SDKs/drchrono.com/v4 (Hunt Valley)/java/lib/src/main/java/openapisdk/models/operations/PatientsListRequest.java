package openapisdk.models.operations;



public class PatientsListRequest {
    public PatientsListQueryParams queryParams;
    public PatientsListRequest withQueryParams(PatientsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsListSecurity security;
    public PatientsListRequest withSecurity(PatientsListSecurity security) {
        this.security = security;
        return this;
    }
}