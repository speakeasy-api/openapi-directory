package openapisdk.models.operations;



public class UpdateSecurityProfileResponse {
    public String contentType;
    public UpdateSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSecurityProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateSecurityProfileResponse updateSecurityProfileResponse;
    public UpdateSecurityProfileResponse withUpdateSecurityProfileResponse(openapisdk.models.shared.UpdateSecurityProfileResponse updateSecurityProfileResponse) {
        this.updateSecurityProfileResponse = updateSecurityProfileResponse;
        return this;
    }
    public Object versionConflictException;
    public UpdateSecurityProfileResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}