package openapisdk.models.operations;



public class ListProductResponse {
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public ListProductResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public ListProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListProductResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ProductList productList;
    public ListProductResponse withProductList(openapisdk.models.shared.ProductList productList) {
        this.productList = productList;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public ListProductResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public ListProductResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}