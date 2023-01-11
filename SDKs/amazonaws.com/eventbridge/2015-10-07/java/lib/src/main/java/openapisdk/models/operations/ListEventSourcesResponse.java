package openapisdk.models.operations;



public class ListEventSourcesResponse {
    public String contentType;
    public ListEventSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListEventSourcesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListEventSourcesResponse listEventSourcesResponse;
    public ListEventSourcesResponse withListEventSourcesResponse(openapisdk.models.shared.ListEventSourcesResponse listEventSourcesResponse) {
        this.listEventSourcesResponse = listEventSourcesResponse;
        return this;
    }
    public Object operationDisabledException;
    public ListEventSourcesResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Long statusCode;
    public ListEventSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}