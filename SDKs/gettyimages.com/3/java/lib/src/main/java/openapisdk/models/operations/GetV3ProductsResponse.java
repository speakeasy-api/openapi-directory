package openapisdk.models.operations;



public class GetV3ProductsResponse {
    public String contentType;
    public GetV3ProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductsResult productsResult;
    public GetV3ProductsResponse withProductsResult(openapisdk.models.shared.ProductsResult productsResult) {
        this.productsResult = productsResult;
        return this;
    }
    public Long statusCode;
    public GetV3ProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}