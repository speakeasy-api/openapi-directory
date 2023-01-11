package openapisdk.models.operations;



public class PatientsSummaryListResponse {
    public String contentType;
    public PatientsSummaryListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientsSummaryListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientsSummaryList200ApplicationJson patientsSummaryList200ApplicationJSONObject;
    public PatientsSummaryListResponse withPatientsSummaryList200ApplicationJsonObject(PatientsSummaryList200ApplicationJson patientsSummaryList200ApplicationJSONObject) {
        this.patientsSummaryList200ApplicationJSONObject = patientsSummaryList200ApplicationJSONObject;
        return this;
    }
}