package openapisdk.models.operations;



public class PatientPaymentsReadResponse {
    public openapisdk.models.shared.CashPayment cashPayment;
    public PatientPaymentsReadResponse withCashPayment(openapisdk.models.shared.CashPayment cashPayment) {
        this.cashPayment = cashPayment;
        return this;
    }
    public String contentType;
    public PatientPaymentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPaymentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}