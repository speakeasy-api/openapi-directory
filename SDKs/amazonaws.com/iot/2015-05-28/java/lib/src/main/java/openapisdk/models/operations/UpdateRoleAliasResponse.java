package openapisdk.models.operations;



public class UpdateRoleAliasResponse {
    public String contentType;
    public UpdateRoleAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateRoleAliasResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateRoleAliasResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRoleAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateRoleAliasResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateRoleAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateRoleAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateRoleAliasResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateRoleAliasResponse updateRoleAliasResponse;
    public UpdateRoleAliasResponse withUpdateRoleAliasResponse(openapisdk.models.shared.UpdateRoleAliasResponse updateRoleAliasResponse) {
        this.updateRoleAliasResponse = updateRoleAliasResponse;
        return this;
    }
}