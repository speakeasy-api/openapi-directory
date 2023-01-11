package openapisdk.models.operations;



public class PatientMessagesListResponse {
    public String contentType;
    public PatientMessagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientMessagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientMessagesList200ApplicationJson patientMessagesList200ApplicationJSONObject;
    public PatientMessagesListResponse withPatientMessagesList200ApplicationJsonObject(PatientMessagesList200ApplicationJson patientMessagesList200ApplicationJSONObject) {
        this.patientMessagesList200ApplicationJSONObject = patientMessagesList200ApplicationJSONObject;
        return this;
    }
}