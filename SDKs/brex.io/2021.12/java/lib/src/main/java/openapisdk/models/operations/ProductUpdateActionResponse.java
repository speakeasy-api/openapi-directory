package openapisdk.models.operations;



public class ProductUpdateActionResponse {
    public String contentType;
    public ProductUpdateActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productUpdateAction200ApplicationJSONAny;
    public ProductUpdateActionResponse withProductUpdateAction200ApplicationJsonAny(Object productUpdateAction200ApplicationJSONAny) {
        this.productUpdateAction200ApplicationJSONAny = productUpdateAction200ApplicationJSONAny;
        return this;
    }
    public Object productUpdateActionDefaultApplicationJSONAny;
    public ProductUpdateActionResponse withProductUpdateActionDefaultApplicationJsonAny(Object productUpdateActionDefaultApplicationJSONAny) {
        this.productUpdateActionDefaultApplicationJSONAny = productUpdateActionDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductUpdateActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}