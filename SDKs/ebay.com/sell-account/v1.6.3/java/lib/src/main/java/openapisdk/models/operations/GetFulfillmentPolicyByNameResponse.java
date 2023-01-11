package openapisdk.models.operations;



public class GetFulfillmentPolicyByNameResponse {
    public String contentType;
    public GetFulfillmentPolicyByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FulfillmentPolicy fulfillmentPolicy;
    public GetFulfillmentPolicyByNameResponse withFulfillmentPolicy(openapisdk.models.shared.FulfillmentPolicy fulfillmentPolicy) {
        this.fulfillmentPolicy = fulfillmentPolicy;
        return this;
    }
    public Long statusCode;
    public GetFulfillmentPolicyByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}