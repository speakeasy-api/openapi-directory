package openapisdk.models.operations;



public class PatientInterventionsPartialUpdateRequest {
    public PatientInterventionsPartialUpdatePathParams pathParams;
    public PatientInterventionsPartialUpdateRequest withPathParams(PatientInterventionsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientInterventionsPartialUpdateQueryParams queryParams;
    public PatientInterventionsPartialUpdateRequest withQueryParams(PatientInterventionsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientInterventionsPartialUpdateSecurity security;
    public PatientInterventionsPartialUpdateRequest withSecurity(PatientInterventionsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}