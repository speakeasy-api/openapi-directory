package openapisdk.models.operations;



public class ListRoleAliasesResponse {
    public String contentType;
    public ListRoleAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListRoleAliasesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListRoleAliasesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListRoleAliasesResponse listRoleAliasesResponse;
    public ListRoleAliasesResponse withListRoleAliasesResponse(openapisdk.models.shared.ListRoleAliasesResponse listRoleAliasesResponse) {
        this.listRoleAliasesResponse = listRoleAliasesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListRoleAliasesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListRoleAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRoleAliasesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListRoleAliasesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}