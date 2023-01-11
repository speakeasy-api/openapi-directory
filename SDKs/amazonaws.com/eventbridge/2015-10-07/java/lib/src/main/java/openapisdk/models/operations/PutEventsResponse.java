package openapisdk.models.operations;



public class PutEventsResponse {
    public String contentType;
    public PutEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public PutEventsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.PutEventsResponse putEventsResponse;
    public PutEventsResponse withPutEventsResponse(openapisdk.models.shared.PutEventsResponse putEventsResponse) {
        this.putEventsResponse = putEventsResponse;
        return this;
    }
    public Long statusCode;
    public PutEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}