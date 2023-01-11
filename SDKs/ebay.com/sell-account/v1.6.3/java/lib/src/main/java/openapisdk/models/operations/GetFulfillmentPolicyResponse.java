package openapisdk.models.operations;



public class GetFulfillmentPolicyResponse {
    public String contentType;
    public GetFulfillmentPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FulfillmentPolicy fulfillmentPolicy;
    public GetFulfillmentPolicyResponse withFulfillmentPolicy(openapisdk.models.shared.FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
        return this;
    }
    public Long statusCode;
    public GetFulfillmentPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}