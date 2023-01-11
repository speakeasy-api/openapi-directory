package openapisdk.models.operations;



public class ValidateSecurityProfileBehaviorsResponse {
    public String contentType;
    public ValidateSecurityProfileBehaviorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ValidateSecurityProfileBehaviorsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ValidateSecurityProfileBehaviorsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public ValidateSecurityProfileBehaviorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ValidateSecurityProfileBehaviorsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.ValidateSecurityProfileBehaviorsResponse validateSecurityProfileBehaviorsResponse;
    public ValidateSecurityProfileBehaviorsResponse withValidateSecurityProfileBehaviorsResponse(openapisdk.models.shared.ValidateSecurityProfileBehaviorsResponse validateSecurityProfileBehaviorsResponse) {
        this.validateSecurityProfileBehaviorsResponse = validateSecurityProfileBehaviorsResponse;
        return this;
    }
}