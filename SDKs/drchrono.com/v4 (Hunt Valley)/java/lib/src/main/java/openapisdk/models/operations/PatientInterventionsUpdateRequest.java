package openapisdk.models.operations;



public class PatientInterventionsUpdateRequest {
    public PatientInterventionsUpdatePathParams pathParams;
    public PatientInterventionsUpdateRequest withPathParams(PatientInterventionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientInterventionsUpdateQueryParams queryParams;
    public PatientInterventionsUpdateRequest withQueryParams(PatientInterventionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientInterventionsUpdateSecurity security;
    public PatientInterventionsUpdateRequest withSecurity(PatientInterventionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}