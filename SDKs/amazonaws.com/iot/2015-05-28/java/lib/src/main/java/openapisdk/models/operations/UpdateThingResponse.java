package openapisdk.models.operations;



public class UpdateThingResponse {
    public String contentType;
    public UpdateThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateThingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateThingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateThingResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateThingResponse;
    public UpdateThingResponse withUpdateThingResponse(java.util.Map<String, Object> updateThingResponse) {
        this.updateThingResponse = updateThingResponse;
        return this;
    }
    public Object versionConflictException;
    public UpdateThingResponse withVersionConflictException(Object versionConflictException) {
        this.versionConflictException = versionConflictException;
        return this;
    }
}