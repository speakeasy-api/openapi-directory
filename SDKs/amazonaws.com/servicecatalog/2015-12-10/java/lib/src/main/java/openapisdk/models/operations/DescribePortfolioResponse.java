package openapisdk.models.operations;



public class DescribePortfolioResponse {
    public String contentType;
    public DescribePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribePortfolioOutput describePortfolioOutput;
    public DescribePortfolioResponse withDescribePortfolioOutput(openapisdk.models.shared.DescribePortfolioOutput describePortfolioOutput) {
        this.describePortfolioOutput = describePortfolioOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}