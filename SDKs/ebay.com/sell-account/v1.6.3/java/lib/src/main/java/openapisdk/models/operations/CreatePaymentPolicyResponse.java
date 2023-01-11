package openapisdk.models.operations;



public class CreatePaymentPolicyResponse {
    public String contentType;
    public CreatePaymentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreatePaymentPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SetPaymentPolicyResponse setPaymentPolicyResponse;
    public CreatePaymentPolicyResponse withSetPaymentPolicyResponse(openapisdk.models.shared.SetPaymentPolicyResponse setPaymentPolicyResponse) {
        this.setPaymentPolicyResponse = setPaymentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public CreatePaymentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}