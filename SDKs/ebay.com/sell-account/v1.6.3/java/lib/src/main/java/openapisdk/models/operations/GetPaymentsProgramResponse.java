package openapisdk.models.operations;



public class GetPaymentsProgramResponse {
    public String contentType;
    public GetPaymentsProgramResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentsProgramResponse paymentsProgramResponse;
    public GetPaymentsProgramResponse withPaymentsProgramResponse(openapisdk.models.shared.PaymentsProgramResponse paymentsProgramResponse) {
        this.paymentsProgramResponse = paymentsProgramResponse;
        return this;
    }
    public Long statusCode;
    public GetPaymentsProgramResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}