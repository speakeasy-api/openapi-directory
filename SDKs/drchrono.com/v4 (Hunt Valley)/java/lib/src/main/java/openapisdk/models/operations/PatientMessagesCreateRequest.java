package openapisdk.models.operations;



public class PatientMessagesCreateRequest {
    public PatientMessagesCreateQueryParams queryParams;
    public PatientMessagesCreateRequest withQueryParams(PatientMessagesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientMessagesCreateSecurity security;
    public PatientMessagesCreateRequest withSecurity(PatientMessagesCreateSecurity security) {
        this.security = security;
        return this;
    }
}