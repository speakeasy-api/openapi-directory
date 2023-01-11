package openapisdk.models.operations;



public class SearchResponse {
    public String contentType;
    public SearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductSearchResponse productSearchResponse;
    public SearchResponse withProductSearchResponse(openapisdk.models.shared.ProductSearchResponse productSearchResponse) {
        this.productSearchResponse = productSearchResponse;
        return this;
    }
    public Long statusCode;
    public SearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}