package openapisdk.models.operations;



public class PatientPhysicalExamsReadResponse {
    public String contentType;
    public PatientPhysicalExamsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientPhysicalExam patientPhysicalExam;
    public PatientPhysicalExamsReadResponse withPatientPhysicalExam(openapisdk.models.shared.PatientPhysicalExam patientPhysicalExam) {
        this.patientPhysicalExam = patientPhysicalExam;
        return this;
    }
    public Long statusCode;
    public PatientPhysicalExamsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}