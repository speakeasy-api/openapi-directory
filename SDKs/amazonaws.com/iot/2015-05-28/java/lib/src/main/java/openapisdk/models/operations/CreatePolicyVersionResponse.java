package openapisdk.models.operations;



public class CreatePolicyVersionResponse {
    public String contentType;
    public CreatePolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePolicyVersionResponse createPolicyVersionResponse;
    public CreatePolicyVersionResponse withCreatePolicyVersionResponse(openapisdk.models.shared.CreatePolicyVersionResponse createPolicyVersionResponse) {
        this.createPolicyVersionResponse = createPolicyVersionResponse;
        return this;
    }
    public Object internalFailureException;
    public CreatePolicyVersionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreatePolicyVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object malformedPolicyException;
    public CreatePolicyVersionResponse withMalformedPolicyException(Object malformedPolicyException) {
        this.malformedPolicyException = malformedPolicyException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreatePolicyVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreatePolicyVersionResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreatePolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreatePolicyVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public CreatePolicyVersionResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public Object versionsLimitExceededException;
    public CreatePolicyVersionResponse withVersionsLimitExceededException(Object versionsLimitExceededException) {
        this.versionsLimitExceededException = versionsLimitExceededException;
        return this;
    }
}