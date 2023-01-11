package openapisdk.models.operations;



public class PatientPaymentsCreateResponse {
    public openapisdk.models.shared.CashPayment cashPayment;
    public PatientPaymentsCreateResponse withCashPayment(openapisdk.models.shared.CashPayment cashPayment) {
        this.cashPayment = cashPayment;
        return this;
    }
    public String contentType;
    public PatientPaymentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatientPaymentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}