package openapisdk.models.operations;



public class UpdatePaymentPolicyResponse {
    public String contentType;
    public UpdatePaymentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SetPaymentPolicyResponse setPaymentPolicyResponse;
    public UpdatePaymentPolicyResponse withSetPaymentPolicyResponse(openapisdk.models.shared.SetPaymentPolicyResponse setPaymentPolicyResponse) {
        this.setPaymentPolicyResponse = setPaymentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public UpdatePaymentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}