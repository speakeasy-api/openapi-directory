package openapisdk.models.operations;



public class ListSecurityProfilesForTargetResponse {
    public String contentType;
    public ListSecurityProfilesForTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListSecurityProfilesForTargetResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListSecurityProfilesForTargetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListSecurityProfilesForTargetResponse listSecurityProfilesForTargetResponse;
    public ListSecurityProfilesForTargetResponse withListSecurityProfilesForTargetResponse(openapisdk.models.shared.ListSecurityProfilesForTargetResponse listSecurityProfilesForTargetResponse) {
        this.listSecurityProfilesForTargetResponse = listSecurityProfilesForTargetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSecurityProfilesForTargetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSecurityProfilesForTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSecurityProfilesForTargetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}