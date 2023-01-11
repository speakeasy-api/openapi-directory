package openapisdk.models.operations;



public class PatientRiskAssessmentsReadResponse {
    public String contentType;
    public PatientRiskAssessmentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientRiskAssessment patientRiskAssessment;
    public PatientRiskAssessmentsReadResponse withPatientRiskAssessment(openapisdk.models.shared.PatientRiskAssessment patientRiskAssessment) {
        this.patientRiskAssessment = patientRiskAssessment;
        return this;
    }
    public Long statusCode;
    public PatientRiskAssessmentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}