package openapisdk.models.operations;



public class GetProductResponse {
    public String contentType;
    public GetProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Product product;
    public GetProductResponse withProduct(openapisdk.models.shared.Product product) {
        this.product = product;
        return this;
    }
    public Long statusCode;
    public GetProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}