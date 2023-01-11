package openapisdk.models.operations;



public class PatientsListResponse {
    public String contentType;
    public PatientsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientsList200ApplicationJson patientsList200ApplicationJSONObject;
    public PatientsListResponse withPatientsList200ApplicationJsonObject(PatientsList200ApplicationJson patientsList200ApplicationJSONObject) {
        this.patientsList200ApplicationJSONObject = patientsList200ApplicationJSONObject;
        return this;
    }
}