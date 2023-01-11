package openapisdk.models.operations;



public class UpdateEventSourceMappingResponse {
    public String contentType;
    public UpdateEventSourceMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration;
    public UpdateEventSourceMappingResponse withEventSourceMappingConfiguration(openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration) {
        this.eventSourceMappingConfiguration = eventSourceMappingConfiguration;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateEventSourceMappingResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public UpdateEventSourceMappingResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateEventSourceMappingResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateEventSourceMappingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateEventSourceMappingResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateEventSourceMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateEventSourceMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}