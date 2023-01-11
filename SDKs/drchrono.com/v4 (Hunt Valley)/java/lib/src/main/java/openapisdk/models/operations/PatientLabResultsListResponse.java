package openapisdk.models.operations;



public class PatientLabResultsListResponse {
    public String contentType;
    public PatientLabResultsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientLabResultsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientLabResultsList200ApplicationJson patientLabResultsList200ApplicationJSONObject;
    public PatientLabResultsListResponse withPatientLabResultsList200ApplicationJsonObject(PatientLabResultsList200ApplicationJson patientLabResultsList200ApplicationJSONObject) {
        this.patientLabResultsList200ApplicationJSONObject = patientLabResultsList200ApplicationJSONObject;
        return this;
    }
}