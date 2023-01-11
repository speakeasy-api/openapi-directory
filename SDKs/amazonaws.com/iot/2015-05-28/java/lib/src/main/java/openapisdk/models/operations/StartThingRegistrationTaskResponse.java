package openapisdk.models.operations;



public class StartThingRegistrationTaskResponse {
    public String contentType;
    public StartThingRegistrationTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartThingRegistrationTaskResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public StartThingRegistrationTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.StartThingRegistrationTaskResponse startThingRegistrationTaskResponse;
    public StartThingRegistrationTaskResponse withStartThingRegistrationTaskResponse(openapisdk.models.shared.StartThingRegistrationTaskResponse startThingRegistrationTaskResponse) {
        this.startThingRegistrationTaskResponse = startThingRegistrationTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartThingRegistrationTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public StartThingRegistrationTaskResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public StartThingRegistrationTaskResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}