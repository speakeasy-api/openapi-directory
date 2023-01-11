package openapisdk.models.operations;



public class SearchProvisionedProductsResponse {
    public String contentType;
    public SearchProvisionedProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public SearchProvisionedProductsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.SearchProvisionedProductsOutput searchProvisionedProductsOutput;
    public SearchProvisionedProductsResponse withSearchProvisionedProductsOutput(openapisdk.models.shared.SearchProvisionedProductsOutput searchProvisionedProductsOutput) {
        this.searchProvisionedProductsOutput = searchProvisionedProductsOutput;
        return this;
    }
    public Long statusCode;
    public SearchProvisionedProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}