package openapisdk.models.operations;



public class ListPortfoliosForProductResponse {
    public String contentType;
    public ListPortfoliosForProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListPortfoliosForProductResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListPortfoliosForProductOutput listPortfoliosForProductOutput;
    public ListPortfoliosForProductResponse withListPortfoliosForProductOutput(openapisdk.models.shared.ListPortfoliosForProductOutput listPortfoliosForProductOutput) {
        this.listPortfoliosForProductOutput = listPortfoliosForProductOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPortfoliosForProductResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPortfoliosForProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}