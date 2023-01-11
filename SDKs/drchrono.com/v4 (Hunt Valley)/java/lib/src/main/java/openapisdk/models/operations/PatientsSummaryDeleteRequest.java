package openapisdk.models.operations;



public class PatientsSummaryDeleteRequest {
    public PatientsSummaryDeletePathParams pathParams;
    public PatientsSummaryDeleteRequest withPathParams(PatientsSummaryDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsSummaryDeleteQueryParams queryParams;
    public PatientsSummaryDeleteRequest withQueryParams(PatientsSummaryDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryDeleteSecurity security;
    public PatientsSummaryDeleteRequest withSecurity(PatientsSummaryDeleteSecurity security) {
        this.security = security;
        return this;
    }
}