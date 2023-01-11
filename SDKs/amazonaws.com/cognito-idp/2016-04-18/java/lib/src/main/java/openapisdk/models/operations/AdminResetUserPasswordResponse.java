package openapisdk.models.operations;



public class AdminResetUserPasswordResponse {
    public java.util.Map<String, Object> adminResetUserPasswordResponse;
    public AdminResetUserPasswordResponse withAdminResetUserPasswordResponse(java.util.Map<String, Object> adminResetUserPasswordResponse) {
        this.adminResetUserPasswordResponse = adminResetUserPasswordResponse;
        return this;
    }
    public String contentType;
    public AdminResetUserPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AdminResetUserPasswordResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public AdminResetUserPasswordResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public AdminResetUserPasswordResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public AdminResetUserPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public AdminResetUserPasswordResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public AdminResetUserPasswordResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object limitExceededException;
    public AdminResetUserPasswordResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public AdminResetUserPasswordResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public AdminResetUserPasswordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AdminResetUserPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public AdminResetUserPasswordResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public AdminResetUserPasswordResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public AdminResetUserPasswordResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotFoundException;
    public AdminResetUserPasswordResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}