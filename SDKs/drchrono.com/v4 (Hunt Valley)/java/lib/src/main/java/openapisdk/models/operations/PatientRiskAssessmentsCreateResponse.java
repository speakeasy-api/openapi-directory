package openapisdk.models.operations;



public class PatientRiskAssessmentsCreateResponse {
    public String contentType;
    public PatientRiskAssessmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientRiskAssessment patientRiskAssessment;
    public PatientRiskAssessmentsCreateResponse withPatientRiskAssessment(openapisdk.models.shared.PatientRiskAssessment patientRiskAssessment) {
        this.patientRiskAssessment = patientRiskAssessment;
        return this;
    }
    public Long statusCode;
    public PatientRiskAssessmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}