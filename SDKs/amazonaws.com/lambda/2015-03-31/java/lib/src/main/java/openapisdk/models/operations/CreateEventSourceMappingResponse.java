package openapisdk.models.operations;



public class CreateEventSourceMappingResponse {
    public String contentType;
    public CreateEventSourceMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration;
    public CreateEventSourceMappingResponse withEventSourceMappingConfiguration(openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration) {
        this.eventSourceMappingConfiguration = eventSourceMappingConfiguration;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateEventSourceMappingResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceConflictException;
    public CreateEventSourceMappingResponse withResourceConflictException(Object resourceConflictException) {
        this.resourceConflictException = resourceConflictException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateEventSourceMappingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public CreateEventSourceMappingResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateEventSourceMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateEventSourceMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}