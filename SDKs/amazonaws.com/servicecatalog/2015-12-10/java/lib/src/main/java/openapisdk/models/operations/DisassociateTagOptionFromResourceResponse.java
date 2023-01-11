package openapisdk.models.operations;



public class DisassociateTagOptionFromResourceResponse {
    public String contentType;
    public DisassociateTagOptionFromResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateTagOptionFromResourceOutput;
    public DisassociateTagOptionFromResourceResponse withDisassociateTagOptionFromResourceOutput(java.util.Map<String, Object> disassociateTagOptionFromResourceOutput) {
        this.disassociateTagOptionFromResourceOutput = disassociateTagOptionFromResourceOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateTagOptionFromResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateTagOptionFromResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public DisassociateTagOptionFromResourceResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}