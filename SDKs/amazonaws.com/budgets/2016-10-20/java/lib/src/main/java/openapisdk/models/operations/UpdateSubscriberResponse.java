package openapisdk.models.operations;



public class UpdateSubscriberResponse {
    public Object accessDeniedException;
    public UpdateSubscriberResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateSubscriberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRecordException;
    public UpdateSubscriberResponse withDuplicateRecordException(Object duplicateRecordException) {
        this.duplicateRecordException = duplicateRecordException;
        return this;
    }
    public Object internalErrorException;
    public UpdateSubscriberResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateSubscriberResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public UpdateSubscriberResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateSubscriberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateSubscriberResponse;
    public UpdateSubscriberResponse withUpdateSubscriberResponse(java.util.Map<String, Object> updateSubscriberResponse) {
        this.updateSubscriberResponse = updateSubscriberResponse;
        return this;
    }
}