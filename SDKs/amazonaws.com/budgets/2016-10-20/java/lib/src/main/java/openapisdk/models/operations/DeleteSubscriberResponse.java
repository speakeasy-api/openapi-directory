package openapisdk.models.operations;



public class DeleteSubscriberResponse {
    public Object accessDeniedException;
    public DeleteSubscriberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteSubscriberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSubscriberResponse;
    public DeleteSubscriberResponse withDeleteSubscriberResponse(java.util.Map<String, Object> deleteSubscriberResponse) {
        this.deleteSubscriberResponse = deleteSubscriberResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteSubscriberResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteSubscriberResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DeleteSubscriberResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSubscriberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}