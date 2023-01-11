package openapisdk.models.operations;



public class AssociateProductWithPortfolioResponse {
    public java.util.Map<String, Object> associateProductWithPortfolioOutput;
    public AssociateProductWithPortfolioResponse withAssociateProductWithPortfolioOutput(java.util.Map<String, Object> associateProductWithPortfolioOutput) {
        this.associateProductWithPortfolioOutput = associateProductWithPortfolioOutput;
        return this;
    }
    public String contentType;
    public AssociateProductWithPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public AssociateProductWithPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public AssociateProductWithPortfolioResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateProductWithPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateProductWithPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}