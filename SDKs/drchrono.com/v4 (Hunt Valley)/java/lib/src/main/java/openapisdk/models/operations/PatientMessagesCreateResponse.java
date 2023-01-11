package openapisdk.models.operations;



public class PatientMessagesCreateResponse {
    public String contentType;
    public PatientMessagesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientMessage patientMessage;
    public PatientMessagesCreateResponse withPatientMessage(openapisdk.models.shared.PatientMessage patientMessage) {
        this.patientMessage = patientMessage;
        return this;
    }
    public Long statusCode;
    public PatientMessagesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}