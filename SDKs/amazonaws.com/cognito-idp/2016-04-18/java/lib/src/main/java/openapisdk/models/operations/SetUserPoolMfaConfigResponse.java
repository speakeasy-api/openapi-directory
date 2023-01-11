package openapisdk.models.operations;



public class SetUserPoolMfaConfigResponse {
    public String contentType;
    public SetUserPoolMfaConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetUserPoolMfaConfigResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public SetUserPoolMfaConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public SetUserPoolMfaConfigResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public SetUserPoolMfaConfigResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object notAuthorizedException;
    public SetUserPoolMfaConfigResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetUserPoolMfaConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SetUserPoolMfaConfigResponse setUserPoolMfaConfigResponse;
    public SetUserPoolMfaConfigResponse withSetUserPoolMfaConfigResponse(openapisdk.models.shared.SetUserPoolMfaConfigResponse setUserPoolMfaConfigResponse) {
        this.setUserPoolMfaConfigResponse = setUserPoolMfaConfigResponse;
        return this;
    }
    public Long statusCode;
    public SetUserPoolMfaConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SetUserPoolMfaConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}