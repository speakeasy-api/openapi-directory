package openapisdk.models.operations;



public class ListConstraintsForPortfolioResponse {
    public String contentType;
    public ListConstraintsForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListConstraintsForPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListConstraintsForPortfolioOutput listConstraintsForPortfolioOutput;
    public ListConstraintsForPortfolioResponse withListConstraintsForPortfolioOutput(openapisdk.models.shared.ListConstraintsForPortfolioOutput listConstraintsForPortfolioOutput) {
        this.listConstraintsForPortfolioOutput = listConstraintsForPortfolioOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListConstraintsForPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListConstraintsForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}