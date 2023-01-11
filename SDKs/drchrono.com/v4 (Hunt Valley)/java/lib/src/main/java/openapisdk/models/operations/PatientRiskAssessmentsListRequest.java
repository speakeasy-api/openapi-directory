package openapisdk.models.operations;



public class PatientRiskAssessmentsListRequest {
    public PatientRiskAssessmentsListQueryParams queryParams;
    public PatientRiskAssessmentsListRequest withQueryParams(PatientRiskAssessmentsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientRiskAssessmentsListSecurity security;
    public PatientRiskAssessmentsListRequest withSecurity(PatientRiskAssessmentsListSecurity security) {
        this.security = security;
        return this;
    }
}