package openapisdk.models.operations;



public class InitiateAuthResponse {
    public String contentType;
    public InitiateAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InitiateAuthResponse initiateAuthResponse;
    public InitiateAuthResponse withInitiateAuthResponse(openapisdk.models.shared.InitiateAuthResponse initiateAuthResponse) {
        this.initiateAuthResponse = initiateAuthResponse;
        return this;
    }
    public Object internalErrorException;
    public InitiateAuthResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public InitiateAuthResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public InitiateAuthResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public InitiateAuthResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public InitiateAuthResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object invalidUserPoolConfigurationException;
    public InitiateAuthResponse withInvalidUserPoolConfigurationException(Object invalidUserPoolConfigurationException) {
        this.invalidUserPoolConfigurationException = invalidUserPoolConfigurationException;
        return this;
    }
    public Object notAuthorizedException;
    public InitiateAuthResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object passwordResetRequiredException;
    public InitiateAuthResponse withPasswordResetRequiredException(Object passwordResetRequiredException) {
        this.passwordResetRequiredException = passwordResetRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public InitiateAuthResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public InitiateAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public InitiateAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public InitiateAuthResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public InitiateAuthResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotConfirmedException;
    public InitiateAuthResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public InitiateAuthResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}