package openapisdk.models.operations;



public class SearchProductsResponse {
    public String contentType;
    public SearchProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public SearchProductsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.SearchProductsOutput searchProductsOutput;
    public SearchProductsResponse withSearchProductsOutput(openapisdk.models.shared.SearchProductsOutput searchProductsOutput) {
        this.searchProductsOutput = searchProductsOutput;
        return this;
    }
    public Long statusCode;
    public SearchProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}