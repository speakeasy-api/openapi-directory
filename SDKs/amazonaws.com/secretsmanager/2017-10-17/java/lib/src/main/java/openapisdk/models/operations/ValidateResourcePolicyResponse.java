package openapisdk.models.operations;



public class ValidateResourcePolicyResponse {
    public String contentType;
    public ValidateResourcePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ValidateResourcePolicyResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidParameterException;
    public ValidateResourcePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public ValidateResourcePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public ValidateResourcePolicyResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Object resourceNotFoundException;
    public ValidateResourcePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ValidateResourcePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidateResourcePolicyResponse validateResourcePolicyResponse;
    public ValidateResourcePolicyResponse withValidateResourcePolicyResponse(openapisdk.models.shared.ValidateResourcePolicyResponse validateResourcePolicyResponse) {
        this.validateResourcePolicyResponse = validateResourcePolicyResponse;
        return this;
    }
}