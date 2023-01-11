package openapisdk.models.operations;



public class PatientFlagTypesCreateRequest {
    public PatientFlagTypesCreateQueryParams queryParams;
    public PatientFlagTypesCreateRequest withQueryParams(PatientFlagTypesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientFlagTypesCreateSecurity security;
    public PatientFlagTypesCreateRequest withSecurity(PatientFlagTypesCreateSecurity security) {
        this.security = security;
        return this;
    }
}