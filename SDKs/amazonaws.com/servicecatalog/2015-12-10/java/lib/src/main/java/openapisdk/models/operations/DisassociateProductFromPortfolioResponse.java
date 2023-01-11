package openapisdk.models.operations;



public class DisassociateProductFromPortfolioResponse {
    public String contentType;
    public DisassociateProductFromPortfolioResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateProductFromPortfolioOutput;
    public DisassociateProductFromPortfolioResponse withDisassociateProductFromPortfolioOutput(java.util.Map<String, Object> disassociateProductFromPortfolioOutput) {
        this.disassociateProductFromPortfolioOutput = disassociateProductFromPortfolioOutput;
        return this;
    }
    public Object invalidParametersException;
    public DisassociateProductFromPortfolioResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public Object resourceInUseException;
    public DisassociateProductFromPortfolioResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateProductFromPortfolioResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateProductFromPortfolioResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}