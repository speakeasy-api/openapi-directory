package openapisdk.models.operations;



public class DisassociateResolverQueryLogConfigResponse {
    public Object accessDeniedException;
    public DisassociateResolverQueryLogConfigResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateResolverQueryLogConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateResolverQueryLogConfigResponse disassociateResolverQueryLogConfigResponse;
    public DisassociateResolverQueryLogConfigResponse withDisassociateResolverQueryLogConfigResponse(openapisdk.models.shared.DisassociateResolverQueryLogConfigResponse disassociateResolverQueryLogConfigResponse) {
        this.disassociateResolverQueryLogConfigResponse = disassociateResolverQueryLogConfigResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public DisassociateResolverQueryLogConfigResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateResolverQueryLogConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateResolverQueryLogConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateResolverQueryLogConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateResolverQueryLogConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateResolverQueryLogConfigResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}