package openapisdk.models.operations;



public class ProductStatusResponse {
    public String contentType;
    public ProductStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productStatus200ApplicationJSONAny;
    public ProductStatusResponse withProductStatus200ApplicationJsonAny(Object productStatus200ApplicationJSONAny) {
        this.productStatus200ApplicationJSONAny = productStatus200ApplicationJSONAny;
        return this;
    }
    public Object productStatusDefaultApplicationJSONAny;
    public ProductStatusResponse withProductStatusDefaultApplicationJsonAny(Object productStatusDefaultApplicationJSONAny) {
        this.productStatusDefaultApplicationJSONAny = productStatusDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}