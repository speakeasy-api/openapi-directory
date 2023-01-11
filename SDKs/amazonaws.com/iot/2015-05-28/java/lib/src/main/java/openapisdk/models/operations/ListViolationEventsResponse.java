package openapisdk.models.operations;



public class ListViolationEventsResponse {
    public String contentType;
    public ListViolationEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListViolationEventsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListViolationEventsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListViolationEventsResponse listViolationEventsResponse;
    public ListViolationEventsResponse withListViolationEventsResponse(openapisdk.models.shared.ListViolationEventsResponse listViolationEventsResponse) {
        this.listViolationEventsResponse = listViolationEventsResponse;
        return this;
    }
    public Long statusCode;
    public ListViolationEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListViolationEventsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}