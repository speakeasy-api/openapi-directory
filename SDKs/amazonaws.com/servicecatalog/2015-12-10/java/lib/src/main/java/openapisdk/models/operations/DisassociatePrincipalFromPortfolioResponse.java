package openapisdk.models.operations;



public class DisassociatePrincipalFromPortfolioResponse {
    public String contentType;
    public DisassociatePrincipalFromPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociatePrincipalFromPortfolioOutput;
    public DisassociatePrincipalFromPortfolioResponse withDisassociatePrincipalFromPortfolioOutput(java.util.Map<String, Object> disassociatePrincipalFromPortfolioOutput) {
        this.disassociatePrincipalFromPortfolioOutput = disassociatePrincipalFromPortfolioOutput;
        return this;
    }
    public Object invalidParametersException;
    public DisassociatePrincipalFromPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociatePrincipalFromPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociatePrincipalFromPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}