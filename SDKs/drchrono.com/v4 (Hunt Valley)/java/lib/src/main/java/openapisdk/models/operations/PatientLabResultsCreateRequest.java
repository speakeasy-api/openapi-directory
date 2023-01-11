package openapisdk.models.operations;



public class PatientLabResultsCreateRequest {
    public PatientLabResultsCreateQueryParams queryParams;
    public PatientLabResultsCreateRequest withQueryParams(PatientLabResultsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientLabResultsCreateSecurity security;
    public PatientLabResultsCreateRequest withSecurity(PatientLabResultsCreateSecurity security) {
        this.security = security;
        return this;
    }
}