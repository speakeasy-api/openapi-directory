package openapisdk.models.operations;



public class PatientLabResultsUpdateRequest {
    public PatientLabResultsUpdatePathParams pathParams;
    public PatientLabResultsUpdateRequest withPathParams(PatientLabResultsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientLabResultsUpdateQueryParams queryParams;
    public PatientLabResultsUpdateRequest withQueryParams(PatientLabResultsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientLabResultsUpdateSecurity security;
    public PatientLabResultsUpdateRequest withSecurity(PatientLabResultsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}