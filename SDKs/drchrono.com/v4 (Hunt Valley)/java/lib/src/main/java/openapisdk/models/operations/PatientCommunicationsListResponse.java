package openapisdk.models.operations;



public class PatientCommunicationsListResponse {
    public String contentType;
    public PatientCommunicationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientCommunicationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientCommunicationsList200ApplicationJson patientCommunicationsList200ApplicationJSONObject;
    public PatientCommunicationsListResponse withPatientCommunicationsList200ApplicationJsonObject(PatientCommunicationsList200ApplicationJson patientCommunicationsList200ApplicationJSONObject) {
        this.patientCommunicationsList200ApplicationJSONObject = patientCommunicationsList200ApplicationJSONObject;
        return this;
    }
}