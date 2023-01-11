package openapisdk.models.operations;



public class ListLogSubscriptionsResponse {
    public Object clientException;
    public ListLogSubscriptionsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListLogSubscriptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public ListLogSubscriptionsResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListLogSubscriptionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListLogSubscriptionsResult listLogSubscriptionsResult;
    public ListLogSubscriptionsResponse withListLogSubscriptionsResult(openapisdk.models.shared.ListLogSubscriptionsResult listLogSubscriptionsResult) {
        this.listLogSubscriptionsResult = listLogSubscriptionsResult;
        return this;
    }
    public Object serviceException;
    public ListLogSubscriptionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListLogSubscriptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}