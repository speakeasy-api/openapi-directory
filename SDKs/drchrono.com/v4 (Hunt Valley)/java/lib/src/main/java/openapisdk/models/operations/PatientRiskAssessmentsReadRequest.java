package openapisdk.models.operations;



public class PatientRiskAssessmentsReadRequest {
    public PatientRiskAssessmentsReadPathParams pathParams;
    public PatientRiskAssessmentsReadRequest withPathParams(PatientRiskAssessmentsReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PatientRiskAssessmentsReadQueryParams queryParams;
    public PatientRiskAssessmentsReadRequest withQueryParams(PatientRiskAssessmentsReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PatientRiskAssessmentsReadSecurity security;
    public PatientRiskAssessmentsReadRequest withSecurity(PatientRiskAssessmentsReadSecurity security) {
        this.security = security;
        return this;
    }
}