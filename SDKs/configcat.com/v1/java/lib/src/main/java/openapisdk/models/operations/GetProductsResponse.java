package openapisdk.models.operations;



public class GetProductsResponse {
    public String contentType;
    public GetProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductModelHaljson[] productModelHaljsons;
    public GetProductsResponse withProductModelHaljsons(openapisdk.models.shared.ProductModelHaljson[] productModelHaljsons) {
        this.productModelHaljsons = productModelHaljsons;
        return this;
    }
    public openapisdk.models.shared.ProductModel[] productModels;
    public GetProductsResponse withProductModels(openapisdk.models.shared.ProductModel[] productModels) {
        this.productModels = productModels;
        return this;
    }
    public Long statusCode;
    public GetProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}