package openapisdk.models.operations;



public class PatientInterventionsCreateRequest {
    public PatientInterventionsCreateQueryParams queryParams;
    public PatientInterventionsCreateRequest withQueryParams(PatientInterventionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientInterventionsCreateSecurity security;
    public PatientInterventionsCreateRequest withSecurity(PatientInterventionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}