package openapisdk.models.operations;



public class PrescriptionMessagesListResponse {
    public String contentType;
    public PrescriptionMessagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PrescriptionMessagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PrescriptionMessagesList200ApplicationJson prescriptionMessagesList200ApplicationJSONObject;
    public PrescriptionMessagesListResponse withPrescriptionMessagesList200ApplicationJsonObject(PrescriptionMessagesList200ApplicationJson prescriptionMessagesList200ApplicationJSONObject) {
        this.prescriptionMessagesList200ApplicationJSONObject = prescriptionMessagesList200ApplicationJSONObject;
        return this;
    }
}