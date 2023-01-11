package openapisdk.models.operations;



public class DisassociateHealthCheckResponse {
    public String contentType;
    public DisassociateHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateHealthCheckResponse;
    public DisassociateHealthCheckResponse withDisassociateHealthCheckResponse(java.util.Map<String, Object> disassociateHealthCheckResponse) {
        this.disassociateHealthCheckResponse = disassociateHealthCheckResponse;
        return this;
    }
    public Object internalErrorException;
    public DisassociateHealthCheckResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateHealthCheckResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object optimisticLockException;
    public DisassociateHealthCheckResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateHealthCheckResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}