package openapisdk.models.operations;



public class PatientInterventionsListResponse {
    public String contentType;
    public PatientInterventionsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientInterventionsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientInterventionsList200ApplicationJson patientInterventionsList200ApplicationJSONObject;
    public PatientInterventionsListResponse withPatientInterventionsList200ApplicationJsonObject(PatientInterventionsList200ApplicationJson patientInterventionsList200ApplicationJSONObject) {
        this.patientInterventionsList200ApplicationJSONObject = patientInterventionsList200ApplicationJSONObject;
        return this;
    }
}