package openapisdk.models.operations;



public class SignUpResponse {
    public Object codeDeliveryFailureException;
    public SignUpResponse withCodeDeliveryFailureException(Object codeDeliveryFailureException) {
        this.codeDeliveryFailureException = codeDeliveryFailureException;
        return this;
    }
    public String contentType;
    public SignUpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SignUpResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public SignUpResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidLambdaResponseException;
    public SignUpResponse withInvalidLambdaResponseException(Object invalidLambdaResponseException) {
        this.invalidLambdaResponseException = invalidLambdaResponseException;
        return this;
    }
    public Object invalidParameterException;
    public SignUpResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidPasswordException;
    public SignUpResponse withInvalidPasswordException(Object invalidPasswordException) {
        this.invalidPasswordException = invalidPasswordException;
        return this;
    }
    public Object invalidSmsRoleAccessPolicyException;
    public SignUpResponse withInvalidSmsRoleAccessPolicyException(Object invalidSmsRoleAccessPolicyException) {
        this.invalidSmsRoleAccessPolicyException = invalidSmsRoleAccessPolicyException;
        return this;
    }
    public Object invalidSmsRoleTrustRelationshipException;
    public SignUpResponse withInvalidSmsRoleTrustRelationshipException(Object invalidSmsRoleTrustRelationshipException) {
        this.invalidSmsRoleTrustRelationshipException = invalidSmsRoleTrustRelationshipException;
        return this;
    }
    public Object notAuthorizedException;
    public SignUpResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SignUpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SignUpResponse signUpResponse;
    public SignUpResponse withSignUpResponse(openapisdk.models.shared.SignUpResponse signUpResponse) {
        this.signUpResponse = signUpResponse;
        return this;
    }
    public Long statusCode;
    public SignUpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SignUpResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unexpectedLambdaException;
    public SignUpResponse withUnexpectedLambdaException(Object unexpectedLambdaException) {
        this.unexpectedLambdaException = unexpectedLambdaException;
        return this;
    }
    public Object userLambdaValidationException;
    public SignUpResponse withUserLambdaValidationException(Object userLambdaValidationException) {
        this.userLambdaValidationException = userLambdaValidationException;
        return this;
    }
    public Object usernameExistsException;
    public SignUpResponse withUsernameExistsException(Object usernameExistsException) {
        this.usernameExistsException = usernameExistsException;
        return this;
    }
}