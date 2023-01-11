package openapisdk.models.operations;



public class CreateNotificationResponse {
    public Object accessDeniedException;
    public CreateNotificationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateNotificationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createNotificationResponse;
    public CreateNotificationResponse withCreateNotificationResponse(java.util.Map<String, Object> createNotificationResponse) {
        this.createNotificationResponse = createNotificationResponse;
        return this;
    }
    public Object creationLimitExceededException;
    public CreateNotificationResponse withCreationLimitExceededException(Object creationLimitExceededException) {
        this.creationLimitExceededException = creationLimitExceededException;
        return this;
    }
    public Object duplicateRecordException;
    public CreateNotificationResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public CreateNotificationResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateNotificationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public CreateNotificationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateNotificationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}