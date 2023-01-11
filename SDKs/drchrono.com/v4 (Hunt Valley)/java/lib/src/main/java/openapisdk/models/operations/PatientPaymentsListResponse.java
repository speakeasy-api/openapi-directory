package openapisdk.models.operations;



public class PatientPaymentsListResponse {
    public String contentType;
    public PatientPaymentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPaymentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatientPaymentsList200ApplicationJson patientPaymentsList200ApplicationJSONObject;
    public PatientPaymentsListResponse withPatientPaymentsList200ApplicationJsonObject(PatientPaymentsList200ApplicationJson patientPaymentsList200ApplicationJSONObject) {
        this.patientPaymentsList200ApplicationJSONObject = patientPaymentsList200ApplicationJSONObject;
        return this;
    }
}