package openapisdk.models.operations;



public class ListEventSourcesResponse {
    public String contentType;
    public ListEventSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException;
    public ListEventSourcesResponse withInvalidParameterValueException(openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListEventSourcesResponse listEventSourcesResponse;
    public ListEventSourcesResponse withListEventSourcesResponse(openapisdk.models.shared.ListEventSourcesResponse listEventSourcesResponse) {
        this.listEventSourcesResponse = listEventSourcesResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ListEventSourcesResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public ListEventSourcesResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListEventSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}