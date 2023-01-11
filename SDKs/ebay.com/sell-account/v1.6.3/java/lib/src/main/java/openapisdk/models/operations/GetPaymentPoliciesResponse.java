package openapisdk.models.operations;



public class GetPaymentPoliciesResponse {
    public String contentType;
    public GetPaymentPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentPolicyResponse paymentPolicyResponse;
    public GetPaymentPoliciesResponse withPaymentPolicyResponse(openapisdk.models.shared.PaymentPolicyResponse paymentPolicyResponse) {
        this.paymentPolicyResponse = paymentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetPaymentPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}