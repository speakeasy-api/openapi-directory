package openapisdk.models.operations;



public class PatientMessagesListRequest {
    public PatientMessagesListQueryParams queryParams;
    public PatientMessagesListRequest withQueryParams(PatientMessagesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientMessagesListSecurity security;
    public PatientMessagesListRequest withSecurity(PatientMessagesListSecurity security) {
        this.security = security;
        return this;
    }
}