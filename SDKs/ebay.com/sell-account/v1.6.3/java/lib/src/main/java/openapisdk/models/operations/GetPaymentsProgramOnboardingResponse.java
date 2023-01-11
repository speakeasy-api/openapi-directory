package openapisdk.models.operations;



public class GetPaymentsProgramOnboardingResponse {
    public String contentType;
    public GetPaymentsProgramOnboardingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PaymentsProgramOnboardingResponse paymentsProgramOnboardingResponse;
    public GetPaymentsProgramOnboardingResponse withPaymentsProgramOnboardingResponse(openapisdk.models.shared.PaymentsProgramOnboardingResponse paymentsProgramOnboardingResponse) {
        this.paymentsProgramOnboardingResponse = paymentsProgramOnboardingResponse;
        return this;
    }
    public Long statusCode;
    public GetPaymentsProgramOnboardingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}