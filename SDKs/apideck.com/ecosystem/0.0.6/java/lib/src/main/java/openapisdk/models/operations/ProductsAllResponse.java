package openapisdk.models.operations;



public class ProductsAllResponse {
    public String contentType;
    public ProductsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProductsResponse getProductsResponse;
    public ProductsAllResponse withGetProductsResponse(openapisdk.models.shared.GetProductsResponse getProductsResponse) {
        this.getProductsResponse = getProductsResponse;
        return this;
    }
    public Long statusCode;
    public ProductsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}