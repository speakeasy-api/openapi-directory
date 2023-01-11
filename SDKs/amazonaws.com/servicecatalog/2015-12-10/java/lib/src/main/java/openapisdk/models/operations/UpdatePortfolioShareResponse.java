package openapisdk.models.operations;



public class UpdatePortfolioShareResponse {
    public String contentType;
    public UpdatePortfolioShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdatePortfolioShareResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public UpdatePortfolioShareResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public UpdatePortfolioShareResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePortfolioShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePortfolioShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePortfolioShareOutput updatePortfolioShareOutput;
    public UpdatePortfolioShareResponse withUpdatePortfolioShareOutput(openapisdk.models.shared.UpdatePortfolioShareOutput updatePortfolioShareOutput) {
        this.updatePortfolioShareOutput = updatePortfolioShareOutput;
        return this;
    }
}