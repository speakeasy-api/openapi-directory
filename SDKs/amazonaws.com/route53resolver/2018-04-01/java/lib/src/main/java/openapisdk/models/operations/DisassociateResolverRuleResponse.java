package openapisdk.models.operations;



public class DisassociateResolverRuleResponse {
    public String contentType;
    public DisassociateResolverRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResolverRuleResponse disassociateResolverRuleResponse;
    public DisassociateResolverRuleResponse withDisassociateResolverRuleResponse(openapisdk.models.shared.DisassociateResolverRuleResponse disassociateResolverRuleResponse) {
        this.disassociateResolverRuleResponse = disassociateResolverRuleResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DisassociateResolverRuleResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateResolverRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateResolverRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateResolverRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateResolverRuleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}