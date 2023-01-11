package openapisdk.models.operations;



public class ListTargetsForSecurityProfileResponse {
    public String contentType;
    public ListTargetsForSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListTargetsForSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListTargetsForSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTargetsForSecurityProfileResponse listTargetsForSecurityProfileResponse;
    public ListTargetsForSecurityProfileResponse withListTargetsForSecurityProfileResponse(openapisdk.models.shared.ListTargetsForSecurityProfileResponse listTargetsForSecurityProfileResponse) {
        this.listTargetsForSecurityProfileResponse = listTargetsForSecurityProfileResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTargetsForSecurityProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTargetsForSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTargetsForSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}