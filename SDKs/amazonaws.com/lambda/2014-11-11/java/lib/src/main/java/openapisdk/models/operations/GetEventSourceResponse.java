package openapisdk.models.operations;



public class GetEventSourceResponse {
    public String contentType;
    public GetEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceConfiguration eventSourceConfiguration;
    public GetEventSourceResponse withEventSourceConfiguration(openapisdk.models.shared.EventSourceConfiguration eventSourceConfiguration) {
        this.eventSourceConfiguration = eventSourceConfiguration;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException;
    public GetEventSourceResponse withInvalidParameterValueException(openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public GetEventSourceResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public GetEventSourceResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}