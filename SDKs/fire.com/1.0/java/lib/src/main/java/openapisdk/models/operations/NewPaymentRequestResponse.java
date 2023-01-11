package openapisdk.models.operations;



public class NewPaymentRequestResponse {
    public String contentType;
    public NewPaymentRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public NewPaymentRequestNewPaymentRequestResponse newPaymentRequestResponse;
    public NewPaymentRequestResponse withNewPaymentRequestResponse(NewPaymentRequestNewPaymentRequestResponse newPaymentRequestResponse) {
        this.newPaymentRequestResponse = newPaymentRequestResponse;
        return this;
    }
    public Long statusCode;
    public NewPaymentRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}