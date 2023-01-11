package openapisdk.models.operations;



public class PatientCommunicationsListRequest {
    public PatientCommunicationsListQueryParams queryParams;
    public PatientCommunicationsListRequest withQueryParams(PatientCommunicationsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientCommunicationsListSecurity security;
    public PatientCommunicationsListRequest withSecurity(PatientCommunicationsListSecurity security) {
        this.security = security;
        return this;
    }
}