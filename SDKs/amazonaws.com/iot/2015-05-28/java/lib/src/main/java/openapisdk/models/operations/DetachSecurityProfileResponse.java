package openapisdk.models.operations;



public class DetachSecurityProfileResponse {
    public String contentType;
    public DetachSecurityProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> detachSecurityProfileResponse;
    public DetachSecurityProfileResponse withDetachSecurityProfileResponse(java.util.Map<String, Object> detachSecurityProfileResponse) {
        this.detachSecurityProfileResponse = detachSecurityProfileResponse;
        return this;
    }
    public Object internalFailureException;
    public DetachSecurityProfileResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DetachSecurityProfileResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachSecurityProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DetachSecurityProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetachSecurityProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}