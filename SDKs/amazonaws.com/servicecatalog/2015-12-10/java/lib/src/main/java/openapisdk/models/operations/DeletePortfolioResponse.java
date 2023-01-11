package openapisdk.models.operations;



public class DeletePortfolioResponse {
    public String contentType;
    public DeletePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePortfolioOutput;
    public DeletePortfolioResponse withDeletePortfolioOutput(java.util.Map<String, Object> deletePortfolioOutput) {
        this.deletePortfolioOutput = deletePortfolioOutput;
        return this;
    }
    public Object invalidParametersException;
    public DeletePortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceInUseException;
    public DeletePortfolioResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public DeletePortfolioResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}