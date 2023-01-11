package openapisdk.models.operations;



public class AttachThingPrincipalResponse {
    public java.util.Map<String, Object> attachThingPrincipalResponse;
    public AttachThingPrincipalResponse withAttachThingPrincipalResponse(java.util.Map<String, Object> attachThingPrincipalResponse) {
        this.attachThingPrincipalResponse = attachThingPrincipalResponse;
        return this;
    }
    public String contentType;
    public AttachThingPrincipalResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public AttachThingPrincipalResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public AttachThingPrincipalResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public AttachThingPrincipalResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public AttachThingPrincipalResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public AttachThingPrincipalResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AttachThingPrincipalResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public AttachThingPrincipalResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}