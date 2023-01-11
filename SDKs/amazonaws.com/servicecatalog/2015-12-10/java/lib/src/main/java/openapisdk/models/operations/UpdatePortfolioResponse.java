package openapisdk.models.operations;



public class UpdatePortfolioResponse {
    public String contentType;
    public UpdatePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public UpdatePortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public UpdatePortfolioResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdatePortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdatePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public UpdatePortfolioResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
    public openapisdk.models.shared.UpdatePortfolioOutput updatePortfolioOutput;
    public UpdatePortfolioResponse withUpdatePortfolioOutput(openapisdk.models.shared.UpdatePortfolioOutput updatePortfolioOutput) {
        this.updatePortfolioOutput = updatePortfolioOutput;
        return this;
    }
}