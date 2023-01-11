package openapisdk.models.operations;



public class RequestProductResponse {
    public String contentType;
    public RequestProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductDetailsResponse productDetailsResponse;
    public RequestProductResponse withProductDetailsResponse(openapisdk.models.shared.ProductDetailsResponse productDetailsResponse) {
        this.productDetailsResponse = productDetailsResponse;
        return this;
    }
    public Long statusCode;
    public RequestProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}