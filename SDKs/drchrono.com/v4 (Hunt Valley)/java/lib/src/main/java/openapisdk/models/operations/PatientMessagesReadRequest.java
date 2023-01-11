package openapisdk.models.operations;



public class PatientMessagesReadRequest {
    public PatientMessagesReadPathParams pathParams;
    public PatientMessagesReadRequest withPathParams(PatientMessagesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientMessagesReadQueryParams queryParams;
    public PatientMessagesReadRequest withQueryParams(PatientMessagesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientMessagesReadSecurity security;
    public PatientMessagesReadRequest withSecurity(PatientMessagesReadSecurity security) {
        this.security = security;
        return this;
    }
}