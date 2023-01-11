package openapisdk.models.operations;



public class PatientCommunicationsReadResponse {
    public String contentType;
    public PatientCommunicationsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientCommunication patientCommunication;
    public PatientCommunicationsReadResponse withPatientCommunication(openapisdk.models.shared.PatientCommunication patientCommunication) {
        this.patientCommunication = patientCommunication;
        return this;
    }
    public Long statusCode;
    public PatientCommunicationsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}