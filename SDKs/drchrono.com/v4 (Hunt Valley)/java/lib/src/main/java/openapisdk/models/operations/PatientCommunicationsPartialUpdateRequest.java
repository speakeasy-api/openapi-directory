package openapisdk.models.operations;



public class PatientCommunicationsPartialUpdateRequest {
    public PatientCommunicationsPartialUpdatePathParams pathParams;
    public PatientCommunicationsPartialUpdateRequest withPathParams(PatientCommunicationsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientCommunicationsPartialUpdateQueryParams queryParams;
    public PatientCommunicationsPartialUpdateRequest withQueryParams(PatientCommunicationsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientCommunicationsPartialUpdateSecurity security;
    public PatientCommunicationsPartialUpdateRequest withSecurity(PatientCommunicationsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}