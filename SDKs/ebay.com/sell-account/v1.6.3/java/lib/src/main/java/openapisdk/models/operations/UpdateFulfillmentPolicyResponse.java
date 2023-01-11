package openapisdk.models.operations;



public class UpdateFulfillmentPolicyResponse {
    public String contentType;
    public UpdateFulfillmentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SetFulfillmentPolicyResponse setFulfillmentPolicyResponse;
    public UpdateFulfillmentPolicyResponse withSetFulfillmentPolicyResponse(openapisdk.models.shared.SetFulfillmentPolicyResponse setFulfillmentPolicyResponse) {
        this.setFulfillmentPolicyResponse = setFulfillmentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public UpdateFulfillmentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}