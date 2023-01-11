package openapisdk.models.operations;



public class DeleteRoleAliasResponse {
    public String contentType;
    public DeleteRoleAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object deleteConflictException;
    public DeleteRoleAliasResponse withDeleteConflictException(Object deleteConflictException) {
        this.deleteConflictException = deleteConflictException;
        return this;
    }
    public java.util.Map<String, Object> deleteRoleAliasResponse;
    public DeleteRoleAliasResponse withDeleteRoleAliasResponse(java.util.Map<String, Object> deleteRoleAliasResponse) {
        this.deleteRoleAliasResponse = deleteRoleAliasResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteRoleAliasResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteRoleAliasResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteRoleAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteRoleAliasResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteRoleAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteRoleAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DeleteRoleAliasResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}