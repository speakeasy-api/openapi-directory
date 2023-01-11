package openapisdk.models.operations;



public class PatientFlagTypesReadRequest {
    public PatientFlagTypesReadPathParams pathParams;
    public PatientFlagTypesReadRequest withPathParams(PatientFlagTypesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientFlagTypesReadQueryParams queryParams;
    public PatientFlagTypesReadRequest withQueryParams(PatientFlagTypesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientFlagTypesReadSecurity security;
    public PatientFlagTypesReadRequest withSecurity(PatientFlagTypesReadSecurity security) {
        this.security = security;
        return this;
    }
}