package openapisdk.models.operations;



public class DescribePortfolioSharesResponse {
    public String contentType;
    public DescribePortfolioSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePortfolioSharesOutput describePortfolioSharesOutput;
    public DescribePortfolioSharesResponse withDescribePortfolioSharesOutput(openapisdk.models.shared.DescribePortfolioSharesOutput describePortfolioSharesOutput) {
        this.describePortfolioSharesOutput = describePortfolioSharesOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribePortfolioSharesResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePortfolioSharesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePortfolioSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}