package openapisdk.models.operations;



public class PatientsSummaryReadRequest {
    public PatientsSummaryReadPathParams pathParams;
    public PatientsSummaryReadRequest withPathParams(PatientsSummaryReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsSummaryReadQueryParams queryParams;
    public PatientsSummaryReadRequest withQueryParams(PatientsSummaryReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryReadSecurity security;
    public PatientsSummaryReadRequest withSecurity(PatientsSummaryReadSecurity security) {
        this.security = security;
        return this;
    }
}