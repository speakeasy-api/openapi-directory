package openapisdk.models.operations;



public class PatientLabResultsReadRequest {
    public PatientLabResultsReadPathParams pathParams;
    public PatientLabResultsReadRequest withPathParams(PatientLabResultsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientLabResultsReadQueryParams queryParams;
    public PatientLabResultsReadRequest withQueryParams(PatientLabResultsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientLabResultsReadSecurity security;
    public PatientLabResultsReadRequest withSecurity(PatientLabResultsReadSecurity security) {
        this.security = security;
        return this;
    }
}