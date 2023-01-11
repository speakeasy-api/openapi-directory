package openapisdk.models.operations;



public class AcceptPortfolioShareResponse {
    public java.util.Map<String, Object> acceptPortfolioShareOutput;
    public AcceptPortfolioShareResponse withAcceptPortfolioShareOutput(java.util.Map<String, Object> acceptPortfolioShareOutput) {
        this.acceptPortfolioShareOutput = acceptPortfolioShareOutput;
        return this;
    }
    public String contentType;
    public AcceptPortfolioShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public AcceptPortfolioShareResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public AcceptPortfolioShareResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AcceptPortfolioShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptPortfolioShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}