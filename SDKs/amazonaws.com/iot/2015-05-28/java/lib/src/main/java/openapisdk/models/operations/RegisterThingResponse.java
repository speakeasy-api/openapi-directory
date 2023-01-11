package openapisdk.models.operations;



public class RegisterThingResponse {
    public Object conflictingResourceUpdateException;
    public RegisterThingResponse withConflictingResourceUpdateException(Object conflictingResourceUpdateException) {
        this.conflictingResourceUpdateException = conflictingResourceUpdateException;
        return this;
    }
    public String contentType;
    public RegisterThingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public RegisterThingResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterThingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.RegisterThingResponse registerThingResponse;
    public RegisterThingResponse withRegisterThingResponse(openapisdk.models.shared.RegisterThingResponse registerThingResponse) {
        this.registerThingResponse = registerThingResponse;
        return this;
    }
    public Object resourceRegistrationFailureException;
    public RegisterThingResponse withResourceRegistrationFailureException(Object resourceRegistrationFailureException) {
        this.resourceRegistrationFailureException = resourceRegistrationFailureException;
        return this;
    }
    public Object serviceUnavailableException;
    public RegisterThingResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RegisterThingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterThingResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public RegisterThingResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}