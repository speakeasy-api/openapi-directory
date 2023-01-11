package openapisdk.models.operations;



public class DisassociateDrtRoleResponse {
    public String contentType;
    public DisassociateDrtRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> disassociateDRTRoleResponse;
    public DisassociateDrtRoleResponse withDisassociateDrtRoleResponse(java.util.Map<String, Object> disassociateDRTRoleResponse) {
        this.disassociateDRTRoleResponse = disassociateDRTRoleResponse;
        return this;
    }
    public Object internalErrorException;
    public DisassociateDrtRoleResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public DisassociateDrtRoleResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object optimisticLockException;
    public DisassociateDrtRoleResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateDrtRoleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateDrtRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}