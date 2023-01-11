package openapisdk.models.operations;



public class ProductOrderResponse {
    public String contentType;
    public ProductOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productOrder200ApplicationJSONAny;
    public ProductOrderResponse withProductOrder200ApplicationJsonAny(Object productOrder200ApplicationJSONAny) {
        this.productOrder200ApplicationJSONAny = productOrder200ApplicationJSONAny;
        return this;
    }
    public Object productOrderDefaultApplicationJSONAny;
    public ProductOrderResponse withProductOrderDefaultApplicationJsonAny(Object productOrderDefaultApplicationJSONAny) {
        this.productOrderDefaultApplicationJSONAny = productOrderDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}