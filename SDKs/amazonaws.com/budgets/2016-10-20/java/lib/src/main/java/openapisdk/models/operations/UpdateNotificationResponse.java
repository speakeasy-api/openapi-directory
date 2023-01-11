package openapisdk.models.operations;



public class UpdateNotificationResponse {
    public Object accessDeniedException;
    public UpdateNotificationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRecordException;
    public UpdateNotificationResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public UpdateNotificationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateNotificationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public UpdateNotificationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateNotificationResponse;
    public UpdateNotificationResponse withUpdateNotificationResponse(java.util.Map<String, Object> updateNotificationResponse) {
        this.updateNotificationResponse = updateNotificationResponse;
        return this;
    }
}