package openapisdk.models.operations;



public class PatientRiskAssessmentsListResponse {
    public String contentType;
    public PatientRiskAssessmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientRiskAssessmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientRiskAssessmentsList200ApplicationJson patientRiskAssessmentsList200ApplicationJSONObject;
    public PatientRiskAssessmentsListResponse withPatientRiskAssessmentsList200ApplicationJsonObject(PatientRiskAssessmentsList200ApplicationJson patientRiskAssessmentsList200ApplicationJSONObject) {
        this.patientRiskAssessmentsList200ApplicationJSONObject = patientRiskAssessmentsList200ApplicationJSONObject;
        return this;
    }
}