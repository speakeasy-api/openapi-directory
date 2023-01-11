package openapisdk.models.operations;



public class PatientRiskAssessmentsCreateRequest {
    public PatientRiskAssessmentsCreateQueryParams queryParams;
    public PatientRiskAssessmentsCreateRequest withQueryParams(PatientRiskAssessmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientRiskAssessmentsCreateSecurity security;
    public PatientRiskAssessmentsCreateRequest withSecurity(PatientRiskAssessmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}