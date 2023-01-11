package openapisdk.models.operations;



public class CreatePolicyResponse {
    public String contentType;
    public CreatePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePolicyResponse createPolicyResponse;
    public CreatePolicyResponse withCreatePolicyResponse(openapisdk.models.shared.CreatePolicyResponse createPolicyResponse) {
        this.createPolicyResponse = createPolicyResponse;
        return this;
    }
    public Object internalFailureException;
    public CreatePolicyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object malformedPolicyException;
    public CreatePolicyResponse withMalformedPolicyException(Object malformedPolicyException) {
        this.malformedPolicyException = malformedPolicyException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreatePolicyResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreatePolicyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreatePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreatePolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreatePolicyResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}