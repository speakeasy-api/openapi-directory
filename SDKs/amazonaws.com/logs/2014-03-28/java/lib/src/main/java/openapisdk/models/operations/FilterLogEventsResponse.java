package openapisdk.models.operations;



public class FilterLogEventsResponse {
    public String contentType;
    public FilterLogEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FilterLogEventsResponse filterLogEventsResponse;
    public FilterLogEventsResponse withFilterLogEventsResponse(openapisdk.models.shared.FilterLogEventsResponse filterLogEventsResponse) {
        this.filterLogEventsResponse = filterLogEventsResponse;
        return this;
    }
    public Object invalidParameterException;
    public FilterLogEventsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public FilterLogEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public FilterLogEventsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public FilterLogEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}