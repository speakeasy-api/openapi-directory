package openapisdk.models.operations;



public class ForgotPasswordResponse {
    public Object codeDeliveryFailureException;
    public ForgotPasswordResponse withCodeDeliveryFailureException(Object codeDeliveryFailureException) {
        this.codeDeliveryFailureException = codeDeliveryFailureException;
        return this;
    }
    public String contentType;
    public ForgotPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ForgotPasswordResponse forgotPasswordResponse;
    public ForgotPasswordResponse withForgotPasswordResponse(openapisdk.models.shared.ForgotPasswordResponse forgotPasswordResponse) {
        this.forgotPasswordResponse = forgotPasswordResponse;
        return this;
    }
    public Object internalErrorException;
    public ForgotPasswordResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public ForgotPasswordResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public ForgotPasswordResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public ForgotPasswordResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public ForgotPasswordResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public ForgotPasswordResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object limitExceededException;
    public ForgotPasswordResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public ForgotPasswordResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ForgotPasswordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ForgotPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ForgotPasswordResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public ForgotPasswordResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public ForgotPasswordResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotConfirmedException;
    public ForgotPasswordResponse withUserNotConfirmedException(Object userNotConfirmedException) {
        this.userNotConfirmedException = userNotConfirmedException;
        return this;
    }
    public Object userNotFoundException;
    public ForgotPasswordResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}