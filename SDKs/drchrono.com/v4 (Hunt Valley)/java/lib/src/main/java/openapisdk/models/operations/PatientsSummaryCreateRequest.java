package openapisdk.models.operations;



public class PatientsSummaryCreateRequest {
    public PatientsSummaryCreateQueryParams queryParams;
    public PatientsSummaryCreateRequest withQueryParams(PatientsSummaryCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryCreateSecurity security;
    public PatientsSummaryCreateRequest withSecurity(PatientsSummaryCreateSecurity security) {
        this.security = security;
        return this;
    }
}