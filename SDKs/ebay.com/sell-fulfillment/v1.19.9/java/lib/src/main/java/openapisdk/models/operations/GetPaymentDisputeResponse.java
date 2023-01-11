package openapisdk.models.operations;



public class GetPaymentDisputeResponse {
    public String contentType;
    public GetPaymentDisputeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentDispute paymentDispute;
    public GetPaymentDisputeResponse withPaymentDispute(openapisdk.models.shared.PaymentDispute paymentDispute) {
        this.paymentDispute = paymentDispute;
        return this;
    }
    public Long statusCode;
    public GetPaymentDisputeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}