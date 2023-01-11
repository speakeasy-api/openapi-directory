package openapisdk.models.operations;



public class SetRiskConfigurationResponse {
    public Object codeDeliveryFailureException;
    public SetRiskConfigurationResponse withCodeDeliveryFailureException(Object codeDeliveryFailureException) {
        this.codeDeliveryFailureException = codeDeliveryFailureException;
        return this;
    }
    public String contentType;
    public SetRiskConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public SetRiskConfigurationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidEmailRoleAccessPolicyException;
    public SetRiskConfigurationResponse withInvalidEmailRoleAccessPolicyException(Object invalidEmailRoleAccessPolicyException) {
        this.invalidEmailRoleAccessPolicyException = invalidEmailRoleAccessPolicyException;
        return this;
    }
    public Object invalidParameterException;
    public SetRiskConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public SetRiskConfigurationResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public SetRiskConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.SetRiskConfigurationResponse setRiskConfigurationResponse;
    public SetRiskConfigurationResponse withSetRiskConfigurationResponse(openapisdk.models.shared.SetRiskConfigurationResponse setRiskConfigurationResponse) {
        this.setRiskConfigurationResponse = setRiskConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public SetRiskConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public SetRiskConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object userPoolAddOnNotEnabledException;
    public SetRiskConfigurationResponse withUserPoolAddOnNotEnabledException(Object userPoolAddOnNotEnabledException) {
        this.userPoolAddOnNotEnabledException = userPoolAddOnNotEnabledException;
        return this;
    }
}