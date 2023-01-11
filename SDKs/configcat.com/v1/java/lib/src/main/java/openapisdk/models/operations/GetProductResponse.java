package openapisdk.models.operations;



public class GetProductResponse {
    public String contentType;
    public GetProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductModel productModel;
    public GetProductResponse withProductModel(openapisdk.models.shared.ProductModel productModel) {
        this.productModel = productModel;
        return this;
    }
    public openapisdk.models.shared.ProductModelHaljson productModelHaljson;
    public GetProductResponse withProductModelHaljson(openapisdk.models.shared.ProductModelHaljson productModelHaljson) {
        this.productModelHaljson = productModelHaljson;
        return this;
    }
    public Long statusCode;
    public GetProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}