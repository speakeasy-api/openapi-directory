package openapisdk.models.operations;



public class PatientsSummaryListRequest {
    public PatientsSummaryListQueryParams queryParams;
    public PatientsSummaryListRequest withQueryParams(PatientsSummaryListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientsSummaryListSecurity security;
    public PatientsSummaryListRequest withSecurity(PatientsSummaryListSecurity security) {
        this.security = security;
        return this;
    }
}