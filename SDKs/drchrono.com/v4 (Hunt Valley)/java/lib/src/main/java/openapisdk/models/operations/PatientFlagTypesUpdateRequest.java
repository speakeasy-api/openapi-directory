package openapisdk.models.operations;



public class PatientFlagTypesUpdateRequest {
    public PatientFlagTypesUpdatePathParams pathParams;
    public PatientFlagTypesUpdateRequest withPathParams(PatientFlagTypesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientFlagTypesUpdateQueryParams queryParams;
    public PatientFlagTypesUpdateRequest withQueryParams(PatientFlagTypesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientFlagTypesUpdateSecurity security;
    public PatientFlagTypesUpdateRequest withSecurity(PatientFlagTypesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}