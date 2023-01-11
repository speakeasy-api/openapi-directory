package openapisdk.models.operations;



public class SearchProductsAsAdminResponse {
    public String contentType;
    public SearchProductsAsAdminResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public SearchProductsAsAdminResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public SearchProductsAsAdminResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchProductsAsAdminOutput searchProductsAsAdminOutput;
    public SearchProductsAsAdminResponse withSearchProductsAsAdminOutput(openapisdk.models.shared.SearchProductsAsAdminOutput searchProductsAsAdminOutput) {
        this.searchProductsAsAdminOutput = searchProductsAsAdminOutput;
        return this;
    }
    public Long statusCode;
    public SearchProductsAsAdminResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}