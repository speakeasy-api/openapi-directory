package openapisdk.models.operations;



public class CreateProductResponse {
    public String contentType;
    public CreateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductModel productModel;
    public CreateProductResponse withProductModel(openapisdk.models.shared.ProductModel productModel) {
        this.productModel = productModel;
        return this;
    }
    public openapisdk.models.shared.ProductModelHaljson productModelHaljson;
    public CreateProductResponse withProductModelHaljson(openapisdk.models.shared.ProductModelHaljson productModelHaljson) {
        this.productModelHaljson = productModelHaljson;
        return this;
    }
    public Long statusCode;
    public CreateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}