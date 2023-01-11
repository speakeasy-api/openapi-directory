package openapisdk.models.operations;



public class PatientPaymentLogReadResponse {
    public openapisdk.models.shared.CashPaymentLog cashPaymentLog;
    public PatientPaymentLogReadResponse withCashPaymentLog(openapisdk.models.shared.CashPaymentLog cashPaymentLog) {
        this.cashPaymentLog = cashPaymentLog;
        return this;
    }
    public String contentType;
    public PatientPaymentLogReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPaymentLogReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}