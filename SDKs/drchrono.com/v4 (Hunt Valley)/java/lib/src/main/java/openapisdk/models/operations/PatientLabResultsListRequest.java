package openapisdk.models.operations;



public class PatientLabResultsListRequest {
    public PatientLabResultsListQueryParams queryParams;
    public PatientLabResultsListRequest withQueryParams(PatientLabResultsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientLabResultsListSecurity security;
    public PatientLabResultsListRequest withSecurity(PatientLabResultsListSecurity security) {
        this.security = security;
        return this;
    }
}