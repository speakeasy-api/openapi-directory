package openapisdk.models.operations;



public class PatientMessagesUpdateRequest {
    public PatientMessagesUpdatePathParams pathParams;
    public PatientMessagesUpdateRequest withPathParams(PatientMessagesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientMessagesUpdateQueryParams queryParams;
    public PatientMessagesUpdateRequest withQueryParams(PatientMessagesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientMessagesUpdateSecurity security;
    public PatientMessagesUpdateRequest withSecurity(PatientMessagesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}