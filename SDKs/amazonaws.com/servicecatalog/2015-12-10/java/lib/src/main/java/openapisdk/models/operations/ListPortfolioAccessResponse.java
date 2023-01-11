package openapisdk.models.operations;



public class ListPortfolioAccessResponse {
    public String contentType;
    public ListPortfolioAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListPortfolioAccessResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListPortfolioAccessOutput listPortfolioAccessOutput;
    public ListPortfolioAccessResponse withListPortfolioAccessOutput(openapisdk.models.shared.ListPortfolioAccessOutput listPortfolioAccessOutput) {
        this.listPortfolioAccessOutput = listPortfolioAccessOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPortfolioAccessResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPortfolioAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}