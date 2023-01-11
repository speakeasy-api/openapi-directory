package openapisdk.models.operations;



public class UpdateUserPoolResponse {
    public Object concurrentModificationException;
    public UpdateUserPoolResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateUserPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public UpdateUserPoolResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public UpdateUserPoolResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateUserPoolResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public UpdateUserPoolResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public UpdateUserPoolResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object notAuthorizedException;
    public UpdateUserPoolResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateUserPoolResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateUserPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateUserPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateUserPoolResponse;
    public UpdateUserPoolResponse withUpdateUserPoolResponse(java.util.Map<String, Object> updateUserPoolResponse) {
        this.updateUserPoolResponse = updateUserPoolResponse;
        return this;
    }
    public Object userImportInProgressException;
    public UpdateUserPoolResponse withUserImportInProgressException(Object userImportInProgressException) {
        this.userImportInProgressException = userImportInProgressException;
        return this;
    }
    public Object userPoolTaggingException;
    public UpdateUserPoolResponse withUserPoolTaggingException(Object userPoolTaggingException) {
        this.userPoolTaggingException = userPoolTaggingException;
        return this;
    }
}