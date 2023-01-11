package openapisdk.models.operations;



public class UpdateProductResponse {
    public String contentType;
    public UpdateProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductModel productModel;
    public UpdateProductResponse withProductModel(openapisdk.models.shared.ProductModel productModel) {
        this.productModel = productModel;
        return this;
    }
    public openapisdk.models.shared.ProductModelHaljson productModelHaljson;
    public UpdateProductResponse withProductModelHaljson(openapisdk.models.shared.ProductModelHaljson productModelHaljson) {
        this.productModelHaljson = productModelHaljson;
        return this;
    }
    public Long statusCode;
    public UpdateProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}