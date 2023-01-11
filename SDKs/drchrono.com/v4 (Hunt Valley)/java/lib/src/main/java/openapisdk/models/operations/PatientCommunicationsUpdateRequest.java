package openapisdk.models.operations;



public class PatientCommunicationsUpdateRequest {
    public PatientCommunicationsUpdatePathParams pathParams;
    public PatientCommunicationsUpdateRequest withPathParams(PatientCommunicationsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientCommunicationsUpdateQueryParams queryParams;
    public PatientCommunicationsUpdateRequest withQueryParams(PatientCommunicationsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientCommunicationsUpdateSecurity security;
    public PatientCommunicationsUpdateRequest withSecurity(PatientCommunicationsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}