package openapisdk.models.operations;



public class ListDeviceEventsResponse {
    public String contentType;
    public ListDeviceEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDeviceEventsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDeviceEventsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDeviceEventsResponse listDeviceEventsResponse;
    public ListDeviceEventsResponse withListDeviceEventsResponse(openapisdk.models.shared.ListDeviceEventsResponse listDeviceEventsResponse) {
        this.listDeviceEventsResponse = listDeviceEventsResponse;
        return this;
    }
    public Object rangeNotSatisfiableException;
    public ListDeviceEventsResponse withRangeNotSatisfiableException(Object rangeNotSatisfiableException) {
        this.rangeNotSatisfiableException = rangeNotSatisfiableException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDeviceEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListDeviceEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}