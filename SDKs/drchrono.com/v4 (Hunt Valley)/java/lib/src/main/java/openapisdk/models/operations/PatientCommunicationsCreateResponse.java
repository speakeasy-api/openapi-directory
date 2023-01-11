package openapisdk.models.operations;



public class PatientCommunicationsCreateResponse {
    public String contentType;
    public PatientCommunicationsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PatientCommunication patientCommunication;
    public PatientCommunicationsCreateResponse withPatientCommunication(openapisdk.models.shared.PatientCommunication patientCommunication) {
        this.patientCommunication = patientCommunication;
        return this;
    }
    public Long statusCode;
    public PatientCommunicationsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}