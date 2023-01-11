package openapisdk.models.operations;



public class ProductCatalogResponse {
    public String contentType;
    public ProductCatalogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object productCatalog200ApplicationJSONAny;
    public ProductCatalogResponse withProductCatalog200ApplicationJsonAny(Object productCatalog200ApplicationJSONAny) {
        this.productCatalog200ApplicationJSONAny = productCatalog200ApplicationJSONAny;
        return this;
    }
    public Object productCatalogDefaultApplicationJSONAny;
    public ProductCatalogResponse withProductCatalogDefaultApplicationJsonAny(Object productCatalogDefaultApplicationJSONAny) {
        this.productCatalogDefaultApplicationJSONAny = productCatalogDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public ProductCatalogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}