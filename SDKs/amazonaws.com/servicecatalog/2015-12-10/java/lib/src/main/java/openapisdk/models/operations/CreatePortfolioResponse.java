package openapisdk.models.operations;



public class CreatePortfolioResponse {
    public String contentType;
    public CreatePortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePortfolioOutput createPortfolioOutput;
    public CreatePortfolioResponse withCreatePortfolioOutput(openapisdk.models.shared.CreatePortfolioOutput createPortfolioOutput) {
        this.createPortfolioOutput = createPortfolioOutput;
        return this;
    }
    public Object invalidParametersException;
    public CreatePortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public CreatePortfolioResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreatePortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public CreatePortfolioResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}