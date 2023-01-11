package openapisdk.models.operations;



public class GetPaymentPolicyByNameResponse {
    public String contentType;
    public GetPaymentPolicyByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentPolicy paymentPolicy;
    public GetPaymentPolicyByNameResponse withPaymentPolicy(openapisdk.models.shared.PaymentPolicy paymentPolicy) {
        this.paymentPolicy = paymentPolicy;
        return this;
    }
    public Long statusCode;
    public GetPaymentPolicyByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}