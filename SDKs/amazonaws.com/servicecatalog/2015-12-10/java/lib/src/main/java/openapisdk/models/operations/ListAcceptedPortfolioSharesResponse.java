package openapisdk.models.operations;



public class ListAcceptedPortfolioSharesResponse {
    public String contentType;
    public ListAcceptedPortfolioSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListAcceptedPortfolioSharesResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListAcceptedPortfolioSharesOutput listAcceptedPortfolioSharesOutput;
    public ListAcceptedPortfolioSharesResponse withListAcceptedPortfolioSharesOutput(openapisdk.models.shared.ListAcceptedPortfolioSharesOutput listAcceptedPortfolioSharesOutput) {
        this.listAcceptedPortfolioSharesOutput = listAcceptedPortfolioSharesOutput;
        return this;
    }
    public Object operationNotSupportedException;
    public ListAcceptedPortfolioSharesResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Long statusCode;
    public ListAcceptedPortfolioSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}