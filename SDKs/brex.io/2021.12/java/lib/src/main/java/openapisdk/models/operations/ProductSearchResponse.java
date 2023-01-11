package openapisdk.models.operations;



public class ProductSearchResponse {
    public String contentType;
    public ProductSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] productSearch200ApplicationJSONAnies;
    public ProductSearchResponse withProductSearch200ApplicationJsonAnies(Object[] productSearch200ApplicationJSONAnies) {
        this.productSearch200ApplicationJSONAnies = productSearch200ApplicationJSONAnies;
        return this;
    }
    public Object productSearchDefaultApplicationJSONAny;
    public ProductSearchResponse withProductSearchDefaultApplicationJsonAny(Object productSearchDefaultApplicationJSONAny) {
        this.productSearchDefaultApplicationJSONAny = productSearchDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}