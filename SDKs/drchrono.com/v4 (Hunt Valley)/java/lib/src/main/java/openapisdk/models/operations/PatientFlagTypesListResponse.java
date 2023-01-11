package openapisdk.models.operations;



public class PatientFlagTypesListResponse {
    public String contentType;
    public PatientFlagTypesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientFlagTypesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientFlagTypesList200ApplicationJson patientFlagTypesList200ApplicationJSONObject;
    public PatientFlagTypesListResponse withPatientFlagTypesList200ApplicationJsonObject(PatientFlagTypesList200ApplicationJson patientFlagTypesList200ApplicationJSONObject) {
        this.patientFlagTypesList200ApplicationJSONObject = patientFlagTypesList200ApplicationJSONObject;
        return this;
    }
}