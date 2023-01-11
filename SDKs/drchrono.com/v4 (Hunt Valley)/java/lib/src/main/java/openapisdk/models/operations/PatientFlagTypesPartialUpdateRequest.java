package openapisdk.models.operations;



public class PatientFlagTypesPartialUpdateRequest {
    public PatientFlagTypesPartialUpdatePathParams pathParams;
    public PatientFlagTypesPartialUpdateRequest withPathParams(PatientFlagTypesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientFlagTypesPartialUpdateQueryParams queryParams;
    public PatientFlagTypesPartialUpdateRequest withQueryParams(PatientFlagTypesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientFlagTypesPartialUpdateSecurity security;
    public PatientFlagTypesPartialUpdateRequest withSecurity(PatientFlagTypesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}