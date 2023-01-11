package openapisdk.models.operations;



public class DisassociateBudgetFromResourceResponse {
    public String contentType;
    public DisassociateBudgetFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateBudgetFromResourceOutput;
    public DisassociateBudgetFromResourceResponse withDisassociateBudgetFromResourceOutput(java.util.Map<String, Object> disassociateBudgetFromResourceOutput) {
        this.disassociateBudgetFromResourceOutput = disassociateBudgetFromResourceOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateBudgetFromResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateBudgetFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}