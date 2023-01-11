package openapisdk.models.operations;



public class ProductRetrieveResponse {
    public String contentType;
    public ProductRetrieveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productRetrieve200ApplicationJSONOneOf;
    public ProductRetrieveResponse withProductRetrieve200ApplicationJsonOneOf(Object productRetrieve200ApplicationJSONOneOf) {
        this.productRetrieve200ApplicationJSONOneOf = productRetrieve200ApplicationJSONOneOf;
        return this;
    }
    public Object productRetrieveDefaultApplicationJSONAny;
    public ProductRetrieveResponse withProductRetrieveDefaultApplicationJsonAny(Object productRetrieveDefaultApplicationJSONAny) {
        this.productRetrieveDefaultApplicationJSONAny = productRetrieveDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductRetrieveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}