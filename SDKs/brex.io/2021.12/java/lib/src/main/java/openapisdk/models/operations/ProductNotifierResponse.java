package openapisdk.models.operations;



public class ProductNotifierResponse {
    public String contentType;
    public ProductNotifierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productNotifier200ApplicationJSONAny;
    public ProductNotifierResponse withProductNotifier200ApplicationJsonAny(Object productNotifier200ApplicationJSONAny) {
        this.productNotifier200ApplicationJSONAny = productNotifier200ApplicationJSONAny;
        return this;
    }
    public Object productNotifierDefaultApplicationJSONAny;
    public ProductNotifierResponse withProductNotifierDefaultApplicationJsonAny(Object productNotifierDefaultApplicationJSONAny) {
        this.productNotifierDefaultApplicationJSONAny = productNotifierDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductNotifierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}