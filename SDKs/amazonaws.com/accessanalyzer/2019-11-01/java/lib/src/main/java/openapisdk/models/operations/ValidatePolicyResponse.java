package openapisdk.models.operations;



public class ValidatePolicyResponse {
    public Object accessDeniedException;
    public ValidatePolicyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ValidatePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ValidatePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public ValidatePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ValidatePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.ValidatePolicyResponse validatePolicyResponse;
    public ValidatePolicyResponse withValidatePolicyResponse(openapisdk.models.shared.ValidatePolicyResponse validatePolicyResponse) {
        this.validatePolicyResponse = validatePolicyResponse;
        return this;
    }
    public Object validationException;
    public ValidatePolicyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}