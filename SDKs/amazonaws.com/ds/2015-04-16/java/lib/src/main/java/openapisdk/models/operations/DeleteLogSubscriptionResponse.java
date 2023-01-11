package openapisdk.models.operations;



public class DeleteLogSubscriptionResponse {
    public Object clientException;
    public DeleteLogSubscriptionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteLogSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLogSubscriptionResult;
    public DeleteLogSubscriptionResponse withDeleteLogSubscriptionResult(java.util.Map<String, Object> deleteLogSubscriptionResult) {
        this.deleteLogSubscriptionResult = deleteLogSubscriptionResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeleteLogSubscriptionResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object serviceException;
    public DeleteLogSubscriptionResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteLogSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteLogSubscriptionResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}