package openapisdk.models.operations;



public class GetPaymentDetailsResponse {
    public String contentType;
    public GetPaymentDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetPaymentDetailsPaymentRequest paymentRequest;
    public GetPaymentDetailsResponse withPaymentRequest(GetPaymentDetailsPaymentRequest paymentRequest) {
        this.paymentRequest = paymentRequest;
        return this;
    }
    public Long statusCode;
    public GetPaymentDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}