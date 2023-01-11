package openapisdk.models.operations;



public class CreateShippingFulfillmentResponse {
    public String contentType;
    public CreateShippingFulfillmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateShippingFulfillmentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateShippingFulfillmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> createShippingFulfillment201ApplicationJSONObject;
    public CreateShippingFulfillmentResponse withCreateShippingFulfillment201ApplicationJsonObject(java.util.Map<String, Object> createShippingFulfillment201ApplicationJSONObject) {
        this.createShippingFulfillment201ApplicationJSONObject = createShippingFulfillment201ApplicationJSONObject;
        return this;
    }
}