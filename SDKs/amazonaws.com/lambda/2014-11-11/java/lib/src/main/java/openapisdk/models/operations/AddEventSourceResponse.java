package openapisdk.models.operations;



public class AddEventSourceResponse {
    public String contentType;
    public AddEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EventSourceConfiguration eventSourceConfiguration;
    public AddEventSourceResponse withEventSourceConfiguration(openapisdk.models.shared.EventSourceConfiguration eventSourceConfiguration) {
        this.eventSourceConfiguration = eventSourceConfiguration;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException;
    public AddEventSourceResponse withInvalidParameterValueException(openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public AddEventSourceResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AddEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}