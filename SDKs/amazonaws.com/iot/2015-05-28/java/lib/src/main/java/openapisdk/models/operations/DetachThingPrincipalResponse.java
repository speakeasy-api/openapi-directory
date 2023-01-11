package openapisdk.models.operations;



public class DetachThingPrincipalResponse {
    public String contentType;
    public DetachThingPrincipalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> detachThingPrincipalResponse;
    public DetachThingPrincipalResponse withDetachThingPrincipalResponse(java.util.Map<String, Object> detachThingPrincipalResponse) {
        this.detachThingPrincipalResponse = detachThingPrincipalResponse;
        return this;
    }
    public Object internalFailureException;
    public DetachThingPrincipalResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DetachThingPrincipalResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DetachThingPrincipalResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DetachThingPrincipalResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DetachThingPrincipalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DetachThingPrincipalResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public DetachThingPrincipalResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}