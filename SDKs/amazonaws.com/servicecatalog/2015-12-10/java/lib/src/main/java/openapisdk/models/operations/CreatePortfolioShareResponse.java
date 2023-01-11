package openapisdk.models.operations;



public class CreatePortfolioShareResponse {
    public String contentType;
    public CreatePortfolioShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePortfolioShareOutput createPortfolioShareOutput;
    public CreatePortfolioShareResponse withCreatePortfolioShareOutput(openapisdk.models.shared.CreatePortfolioShareOutput createPortfolioShareOutput) {
        this.createPortfolioShareOutput = createPortfolioShareOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreatePortfolioShareResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public CreatePortfolioShareResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object limitExceededException;
    public CreatePortfolioShareResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotSupportedException;
    public CreatePortfolioShareResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePortfolioShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreatePortfolioShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}