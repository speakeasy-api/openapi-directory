package openapisdk.models.operations;



public class DeleteEventSourceMappingResponse {
    public String contentType;
    public DeleteEventSourceMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration;
    public DeleteEventSourceMappingResponse withEventSourceMappingConfiguration(openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration) {
        this.eventSourceMappingConfiguration = eventSourceMappingConfiguration;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteEventSourceMappingResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteEventSourceMappingResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteEventSourceMappingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public DeleteEventSourceMappingResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteEventSourceMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteEventSourceMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}