package openapisdk.models.operations;



public class PatientFlagTypesListRequest {
    public PatientFlagTypesListQueryParams queryParams;
    public PatientFlagTypesListRequest withQueryParams(PatientFlagTypesListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientFlagTypesListSecurity security;
    public PatientFlagTypesListRequest withSecurity(PatientFlagTypesListSecurity security) {
        this.security = security;
        return this;
    }
}