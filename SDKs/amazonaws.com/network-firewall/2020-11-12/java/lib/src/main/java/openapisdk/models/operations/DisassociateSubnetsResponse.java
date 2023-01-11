package openapisdk.models.operations;



public class DisassociateSubnetsResponse {
    public String contentType;
    public DisassociateSubnetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DisassociateSubnetsResponse disassociateSubnetsResponse;
    public DisassociateSubnetsResponse withDisassociateSubnetsResponse(openapisdk.models.shared.DisassociateSubnetsResponse disassociateSubnetsResponse) {
        this.disassociateSubnetsResponse = disassociateSubnetsResponse;
        return this;
    }
    public Object internalServerError;
    public DisassociateSubnetsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public DisassociateSubnetsResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public DisassociateSubnetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public DisassociateSubnetsResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateSubnetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateSubnetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DisassociateSubnetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}