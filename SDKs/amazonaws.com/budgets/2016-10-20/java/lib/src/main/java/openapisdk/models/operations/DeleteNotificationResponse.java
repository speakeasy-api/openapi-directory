package openapisdk.models.operations;



public class DeleteNotificationResponse {
    public Object accessDeniedException;
    public DeleteNotificationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteNotificationResponse;
    public DeleteNotificationResponse withDeleteNotificationResponse(java.util.Map<String, Object> deleteNotificationResponse) {
        this.deleteNotificationResponse = deleteNotificationResponse;
        return this;
    }
    public Object internalErrorException;
    public DeleteNotificationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteNotificationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public DeleteNotificationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}