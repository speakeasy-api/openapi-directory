package openapisdk.models.operations;



public class CreateFulfillmentPolicyResponse {
    public String contentType;
    public CreateFulfillmentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateFulfillmentPolicyResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.SetFulfillmentPolicyResponse setFulfillmentPolicyResponse;
    public CreateFulfillmentPolicyResponse withSetFulfillmentPolicyResponse(openapisdk.models.shared.SetFulfillmentPolicyResponse setFulfillmentPolicyResponse) {
        this.setFulfillmentPolicyResponse = setFulfillmentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public CreateFulfillmentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}