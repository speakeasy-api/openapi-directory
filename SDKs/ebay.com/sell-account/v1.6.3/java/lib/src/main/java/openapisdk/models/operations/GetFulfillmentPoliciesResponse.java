package openapisdk.models.operations;



public class GetFulfillmentPoliciesResponse {
    public String contentType;
    public GetFulfillmentPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FulfillmentPolicyResponse fulfillmentPolicyResponse;
    public GetFulfillmentPoliciesResponse withFulfillmentPolicyResponse(openapisdk.models.shared.FulfillmentPolicyResponse fulfillmentPolicyResponse) {
        this.fulfillmentPolicyResponse = fulfillmentPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetFulfillmentPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}