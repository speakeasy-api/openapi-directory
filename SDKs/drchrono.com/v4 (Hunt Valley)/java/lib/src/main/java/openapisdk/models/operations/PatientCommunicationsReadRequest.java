package openapisdk.models.operations;



public class PatientCommunicationsReadRequest {
    public PatientCommunicationsReadPathParams pathParams;
    public PatientCommunicationsReadRequest withPathParams(PatientCommunicationsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientCommunicationsReadQueryParams queryParams;
    public PatientCommunicationsReadRequest withQueryParams(PatientCommunicationsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientCommunicationsReadSecurity security;
    public PatientCommunicationsReadRequest withSecurity(PatientCommunicationsReadSecurity security) {
        this.security = security;
        return this;
    }
}