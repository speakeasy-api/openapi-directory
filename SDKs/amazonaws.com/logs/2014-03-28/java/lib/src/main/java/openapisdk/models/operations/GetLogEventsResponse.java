package openapisdk.models.operations;



public class GetLogEventsResponse {
    public String contentType;
    public GetLogEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLogEventsResponse getLogEventsResponse;
    public GetLogEventsResponse withGetLogEventsResponse(openapisdk.models.shared.GetLogEventsResponse getLogEventsResponse) {
        this.getLogEventsResponse = getLogEventsResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetLogEventsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLogEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetLogEventsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetLogEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}