package openapisdk.models.operations;



public class GetShippingFulfillmentResponse {
    public String contentType;
    public GetShippingFulfillmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingFulfillment shippingFulfillment;
    public GetShippingFulfillmentResponse withShippingFulfillment(openapisdk.models.shared.ShippingFulfillment shippingFulfillment) {
        this.shippingFulfillment = shippingFulfillment;
        return this;
    }
    public Long statusCode;
    public GetShippingFulfillmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}