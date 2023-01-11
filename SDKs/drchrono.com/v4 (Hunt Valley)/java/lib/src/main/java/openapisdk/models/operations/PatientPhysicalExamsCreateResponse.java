package openapisdk.models.operations;



public class PatientPhysicalExamsCreateResponse {
    public String contentType;
    public PatientPhysicalExamsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientPhysicalExam patientPhysicalExam;
    public PatientPhysicalExamsCreateResponse withPatientPhysicalExam(openapisdk.models.shared.PatientPhysicalExam patientPhysicalExam) {
        this.patientPhysicalExam = patientPhysicalExam;
        return this;
    }
    public Long statusCode;
    public PatientPhysicalExamsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}