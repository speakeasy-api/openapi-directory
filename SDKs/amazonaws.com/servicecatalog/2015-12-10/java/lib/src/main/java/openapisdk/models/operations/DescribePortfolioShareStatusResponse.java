package openapisdk.models.operations;



public class DescribePortfolioShareStatusResponse {
    public String contentType;
    public DescribePortfolioShareStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePortfolioShareStatusOutput describePortfolioShareStatusOutput;
    public DescribePortfolioShareStatusResponse withDescribePortfolioShareStatusOutput(openapisdk.models.shared.DescribePortfolioShareStatusOutput describePortfolioShareStatusOutput) {
        this.describePortfolioShareStatusOutput = describePortfolioShareStatusOutput;
        return this;
    }
    public Object invalidParametersException;
    public DescribePortfolioShareStatusResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object operationNotSupportedException;
    public DescribePortfolioShareStatusResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePortfolioShareStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePortfolioShareStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}