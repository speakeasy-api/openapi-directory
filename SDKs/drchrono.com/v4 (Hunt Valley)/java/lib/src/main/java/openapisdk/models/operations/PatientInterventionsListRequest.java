package openapisdk.models.operations;



public class PatientInterventionsListRequest {
    public PatientInterventionsListQueryParams queryParams;
    public PatientInterventionsListRequest withQueryParams(PatientInterventionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientInterventionsListSecurity security;
    public PatientInterventionsListRequest withSecurity(PatientInterventionsListSecurity security) {
        this.security = security;
        return this;
    }
}