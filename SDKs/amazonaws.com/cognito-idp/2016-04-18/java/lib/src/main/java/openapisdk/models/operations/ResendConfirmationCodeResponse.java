package openapisdk.models.operations;



public class ResendConfirmationCodeResponse {
    public Object codeDeliveryFailureException;
    public ResendConfirmationCodeResponse withCodeDeliveryFailureException(Object codeDeliveryFailureException) {
        this.codeDeliveryFailureException = codeDeliveryFailureException;
        return this;
    }
    public String contentType;
    public ResendConfirmationCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ResendConfirmationCodeResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public ResendConfirmationCodeResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public ResendConfirmationCodeResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public ResendConfirmationCodeResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public ResendConfirmationCodeResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public ResendConfirmationCodeResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object limitExceededException;
    public ResendConfirmationCodeResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notAuthorizedException;
    public ResendConfirmationCodeResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public openapisdk.models.shared.ResendConfirmationCodeResponse resendConfirmationCodeResponse;
    public ResendConfirmationCodeResponse withResendConfirmationCodeResponse(openapisdk.models.shared.ResendConfirmationCodeResponse resendConfirmationCodeResponse) {
        this.resendConfirmationCodeResponse = resendConfirmationCodeResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ResendConfirmationCodeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ResendConfirmationCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ResendConfirmationCodeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public ResendConfirmationCodeResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public ResendConfirmationCodeResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object userNotFoundException;
    public ResendConfirmationCodeResponse withUserNotFoundException(Object userNotFoundException) {
        this.userNotFoundException = userNotFoundException;
        return this;
    }
}