package openapisdk.models.operations;



public class AssociatePrincipalWithPortfolioResponse {
    public java.util.Map<String, Object> associatePrincipalWithPortfolioOutput;
    public AssociatePrincipalWithPortfolioResponse withAssociatePrincipalWithPortfolioOutput(java.util.Map<String, Object> associatePrincipalWithPortfolioOutput) {
        this.associatePrincipalWithPortfolioOutput = associatePrincipalWithPortfolioOutput;
        return this;
    }
    public String contentType;
    public AssociatePrincipalWithPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public AssociatePrincipalWithPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object limitExceededException;
    public AssociatePrincipalWithPortfolioResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociatePrincipalWithPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociatePrincipalWithPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}