package openapisdk.models.operations;



public class MedicationsListResponse {
    public String contentType;
    public MedicationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public MedicationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public MedicationsList200ApplicationJson medicationsList200ApplicationJSONObject;
    public MedicationsListResponse withMedicationsList200ApplicationJsonObject(MedicationsList200ApplicationJson medicationsList200ApplicationJSONObject) {
        this.medicationsList200ApplicationJSONObject = medicationsList200ApplicationJSONObject;
        return this;
    }
}