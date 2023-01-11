package openapisdk.models.operations;



public class ListPrincipalsForPortfolioResponse {
    public String contentType;
    public ListPrincipalsForPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListPrincipalsForPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListPrincipalsForPortfolioOutput listPrincipalsForPortfolioOutput;
    public ListPrincipalsForPortfolioResponse withListPrincipalsForPortfolioOutput(openapisdk.models.shared.ListPrincipalsForPortfolioOutput listPrincipalsForPortfolioOutput) {
        this.listPrincipalsForPortfolioOutput = listPrincipalsForPortfolioOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPrincipalsForPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListPrincipalsForPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}