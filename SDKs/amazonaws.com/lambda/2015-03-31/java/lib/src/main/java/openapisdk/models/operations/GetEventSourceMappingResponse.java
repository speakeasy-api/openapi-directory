package openapisdk.models.operations;



public class GetEventSourceMappingResponse {
    public String contentType;
    public GetEventSourceMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration;
    public GetEventSourceMappingResponse withEventSourceMappingConfiguration(openapisdk.models.shared.EventSourceMappingConfiguration eventSourceMappingConfiguration) {
        this.eventSourceMappingConfiguration = eventSourceMappingConfiguration;
        return this;
    }
    public Object invalidParameterValueException;
    public GetEventSourceMappingResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEventSourceMappingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetEventSourceMappingResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetEventSourceMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetEventSourceMappingResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}