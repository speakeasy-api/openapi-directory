package openapisdk.models.operations;



public class ProductOrderUboResponse {
    public String contentType;
    public ProductOrderUboResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productOrderUbo200ApplicationJSONAny;
    public ProductOrderUboResponse withProductOrderUbo200ApplicationJsonAny(Object productOrderUbo200ApplicationJSONAny) {
        this.productOrderUbo200ApplicationJSONAny = productOrderUbo200ApplicationJSONAny;
        return this;
    }
    public Object productOrderUboDefaultApplicationJSONAny;
    public ProductOrderUboResponse withProductOrderUboDefaultApplicationJsonAny(Object productOrderUboDefaultApplicationJSONAny) {
        this.productOrderUboDefaultApplicationJSONAny = productOrderUboDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductOrderUboResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}