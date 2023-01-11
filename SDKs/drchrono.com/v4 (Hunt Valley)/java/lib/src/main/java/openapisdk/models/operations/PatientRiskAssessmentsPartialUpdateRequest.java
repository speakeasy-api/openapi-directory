package openapisdk.models.operations;



public class PatientRiskAssessmentsPartialUpdateRequest {
    public PatientRiskAssessmentsPartialUpdatePathParams pathParams;
    public PatientRiskAssessmentsPartialUpdateRequest withPathParams(PatientRiskAssessmentsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientRiskAssessmentsPartialUpdateQueryParams queryParams;
    public PatientRiskAssessmentsPartialUpdateRequest withQueryParams(PatientRiskAssessmentsPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientRiskAssessmentsPartialUpdateSecurity security;
    public PatientRiskAssessmentsPartialUpdateRequest withSecurity(PatientRiskAssessmentsPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}