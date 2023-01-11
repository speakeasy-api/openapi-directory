package openapisdk.models.operations;



public class ListEventSourceMappingsResponse {
    public String contentType;
    public ListEventSourceMappingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListEventSourceMappingsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListEventSourceMappingsResponse listEventSourceMappingsResponse;
    public ListEventSourceMappingsResponse withListEventSourceMappingsResponse(openapisdk.models.shared.ListEventSourceMappingsResponse listEventSourceMappingsResponse) {
        this.listEventSourceMappingsResponse = listEventSourceMappingsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEventSourceMappingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListEventSourceMappingsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListEventSourceMappingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEventSourceMappingsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}