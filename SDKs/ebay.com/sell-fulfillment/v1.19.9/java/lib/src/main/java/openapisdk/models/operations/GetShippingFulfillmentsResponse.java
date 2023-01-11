package openapisdk.models.operations;



public class GetShippingFulfillmentsResponse {
    public String contentType;
    public GetShippingFulfillmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShippingFulfillmentPagedCollection shippingFulfillmentPagedCollection;
    public GetShippingFulfillmentsResponse withShippingFulfillmentPagedCollection(openapisdk.models.shared.ShippingFulfillmentPagedCollection shippingFulfillmentPagedCollection) {
        this.shippingFulfillmentPagedCollection = shippingFulfillmentPagedCollection;
        return this;
    }
    public Long statusCode;
    public GetShippingFulfillmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}