package openapisdk.models.operations;



public class PatientInterventionsReadRequest {
    public PatientInterventionsReadPathParams pathParams;
    public PatientInterventionsReadRequest withPathParams(PatientInterventionsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientInterventionsReadQueryParams queryParams;
    public PatientInterventionsReadRequest withQueryParams(PatientInterventionsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientInterventionsReadSecurity security;
    public PatientInterventionsReadRequest withSecurity(PatientInterventionsReadSecurity security) {
        this.security = security;
        return this;
    }
}