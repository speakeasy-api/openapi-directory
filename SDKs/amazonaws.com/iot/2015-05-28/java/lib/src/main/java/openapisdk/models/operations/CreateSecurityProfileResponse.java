package openapisdk.models.operations;



public class CreateSecurityProfileResponse {
    public String contentType;
    public CreateSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSecurityProfileResponse createSecurityProfileResponse;
    public CreateSecurityProfileResponse withCreateSecurityProfileResponse(openapisdk.models.shared.CreateSecurityProfileResponse createSecurityProfileResponse) {
        this.createSecurityProfileResponse = createSecurityProfileResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateSecurityProfileResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}