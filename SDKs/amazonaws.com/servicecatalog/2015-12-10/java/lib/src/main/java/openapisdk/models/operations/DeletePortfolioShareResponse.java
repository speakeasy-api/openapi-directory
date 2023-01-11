package openapisdk.models.operations;



public class DeletePortfolioShareResponse {
    public String contentType;
    public DeletePortfolioShareResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeletePortfolioShareOutput deletePortfolioShareOutput;
    public DeletePortfolioShareResponse withDeletePortfolioShareOutput(openapisdk.models.shared.DeletePortfolioShareOutput deletePortfolioShareOutput) {
        this.deletePortfolioShareOutput = deletePortfolioShareOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeletePortfolioShareResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object invalidStateException;
    public DeletePortfolioShareResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object operationNotSupportedException;
    public DeletePortfolioShareResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePortfolioShareResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePortfolioShareResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}