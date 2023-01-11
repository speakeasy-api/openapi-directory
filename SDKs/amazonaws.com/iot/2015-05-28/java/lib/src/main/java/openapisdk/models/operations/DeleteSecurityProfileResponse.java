package openapisdk.models.operations;



public class DeleteSecurityProfileResponse {
    public String contentType;
    public DeleteSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSecurityProfileResponse;
    public DeleteSecurityProfileResponse withDeleteSecurityProfileResponse(java.util.Map<String, Object> deleteSecurityProfileResponse) {
        this.deleteSecurityProfileResponse = deleteSecurityProfileResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object versionConflictException;
    public DeleteSecurityProfileResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}