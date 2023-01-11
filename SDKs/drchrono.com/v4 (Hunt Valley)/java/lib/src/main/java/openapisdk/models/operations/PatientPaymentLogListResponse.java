package openapisdk.models.operations;



public class PatientPaymentLogListResponse {
    public String contentType;
    public PatientPaymentLogListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPaymentLogListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientPaymentLogList200ApplicationJson patientPaymentLogList200ApplicationJSONObject;
    public PatientPaymentLogListResponse withPatientPaymentLogList200ApplicationJsonObject(PatientPaymentLogList200ApplicationJson patientPaymentLogList200ApplicationJSONObject) {
        this.patientPaymentLogList200ApplicationJSONObject = patientPaymentLogList200ApplicationJSONObject;
        return this;
    }
}