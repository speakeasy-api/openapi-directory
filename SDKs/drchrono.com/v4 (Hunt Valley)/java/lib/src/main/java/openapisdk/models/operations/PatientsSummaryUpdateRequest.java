package openapisdk.models.operations;



public class PatientsSummaryUpdateRequest {
    public PatientsSummaryUpdatePathParams pathParams;
    public PatientsSummaryUpdateRequest withPathParams(PatientsSummaryUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsSummaryUpdateQueryParams queryParams;
    public PatientsSummaryUpdateRequest withQueryParams(PatientsSummaryUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryUpdateSecurity security;
    public PatientsSummaryUpdateRequest withSecurity(PatientsSummaryUpdateSecurity security) {
        this.security = security;
        return this;
    }
}