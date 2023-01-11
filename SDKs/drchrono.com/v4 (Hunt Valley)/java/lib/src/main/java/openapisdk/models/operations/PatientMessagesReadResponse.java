package openapisdk.models.operations;



public class PatientMessagesReadResponse {
    public String contentType;
    public PatientMessagesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientMessage patientMessage;
    public PatientMessagesReadResponse withPatientMessage(openapisdk.models.shared.PatientMessage patientMessage) {
        this.patientMessage = patientMessage;
        return this;
    }
    public Long statusCode;
    public PatientMessagesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}