package openapisdk.models.operations;



public class ProductsOneResponse {
    public String contentType;
    public ProductsOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProductResponse getProductResponse;
    public ProductsOneResponse withGetProductResponse(openapisdk.models.shared.GetProductResponse getProductResponse) {
        this.getProductResponse = getProductResponse;
        return this;
    }
    public Long statusCode;
    public ProductsOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}