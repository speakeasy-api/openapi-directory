package openapisdk.models.operations;



public class ListSecurityProfilesResponse {
    public String contentType;
    public ListSecurityProfilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListSecurityProfilesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListSecurityProfilesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListSecurityProfilesResponse listSecurityProfilesResponse;
    public ListSecurityProfilesResponse withListSecurityProfilesResponse(openapisdk.models.shared.ListSecurityProfilesResponse listSecurityProfilesResponse) {
        this.listSecurityProfilesResponse = listSecurityProfilesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListSecurityProfilesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListSecurityProfilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSecurityProfilesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}