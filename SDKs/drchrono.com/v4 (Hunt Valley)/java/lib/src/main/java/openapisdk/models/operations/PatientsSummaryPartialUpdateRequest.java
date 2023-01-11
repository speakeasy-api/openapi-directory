package openapisdk.models.operations;



public class PatientsSummaryPartialUpdateRequest {
    public PatientsSummaryPartialUpdatePathParams pathParams;
    public PatientsSummaryPartialUpdateRequest withPathParams(PatientsSummaryPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientsSummaryPartialUpdateQueryParams queryParams;
    public PatientsSummaryPartialUpdateRequest withQueryParams(PatientsSummaryPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryPartialUpdateSecurity security;
    public PatientsSummaryPartialUpdateRequest withSecurity(PatientsSummaryPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}