package openapisdk.models.operations;



public class CreateSubscriberResponse {
    public Object accessDeniedException;
    public CreateSubscriberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateSubscriberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createSubscriberResponse;
    public CreateSubscriberResponse withCreateSubscriberResponse(java.util.Map<String, Object> createSubscriberResponse) {
        this.createSubscriberResponse = createSubscriberResponse;
        return this;
    }
    public Object creationLimitExceededException;
    public CreateSubscriberResponse withCreationLimitExceededException(Object creationLimitExceededException) {
        this.creationLimitExceededException = creationLimitExceededException;
        return this;
    }
    public Object duplicateRecordException;
    public CreateSubscriberResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public CreateSubscriberResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public CreateSubscriberResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public CreateSubscriberResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateSubscriberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}