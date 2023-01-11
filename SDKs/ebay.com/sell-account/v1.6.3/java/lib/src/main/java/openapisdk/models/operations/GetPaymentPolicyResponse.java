package openapisdk.models.operations;



public class GetPaymentPolicyResponse {
    public String contentType;
    public GetPaymentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentPolicy paymentPolicy;
    public GetPaymentPolicyResponse withPaymentPolicy(openapisdk.models.shared.PaymentPolicy paymentPolicy) {
        this.paymentPolicy = paymentPolicy;
        return this;
    }
    public Long statusCode;
    public GetPaymentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}