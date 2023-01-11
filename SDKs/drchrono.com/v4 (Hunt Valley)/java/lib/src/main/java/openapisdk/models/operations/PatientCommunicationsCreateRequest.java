package openapisdk.models.operations;



public class PatientCommunicationsCreateRequest {
    public PatientCommunicationsCreateQueryParams queryParams;
    public PatientCommunicationsCreateRequest withQueryParams(PatientCommunicationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientCommunicationsCreateSecurity security;
    public PatientCommunicationsCreateRequest withSecurity(PatientCommunicationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}