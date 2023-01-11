package openapisdk.models.operations;



public class StopThingRegistrationTaskResponse {
    public String contentType;
    public StopThingRegistrationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StopThingRegistrationTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StopThingRegistrationTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopThingRegistrationTaskResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopThingRegistrationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopThingRegistrationTaskResponse;
    public StopThingRegistrationTaskResponse withStopThingRegistrationTaskResponse(java.util.Map<String, Object> stopThingRegistrationTaskResponse) {
        this.stopThingRegistrationTaskResponse = stopThingRegistrationTaskResponse;
        return this;
    }
    public Object throttlingException;
    public StopThingRegistrationTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public StopThingRegistrationTaskResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}