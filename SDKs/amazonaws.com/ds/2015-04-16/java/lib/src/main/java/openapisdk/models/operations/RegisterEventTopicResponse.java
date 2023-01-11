package openapisdk.models.operations;



public class RegisterEventTopicResponse {
    public Object clientException;
    public RegisterEventTopicResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterEventTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public RegisterEventTopicResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public RegisterEventTopicResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> registerEventTopicResult;
    public RegisterEventTopicResponse withRegisterEventTopicResult(java.util.Map<String, Object> registerEventTopicResult) {
        this.registerEventTopicResult = registerEventTopicResult;
        return this;
    }
    public Object serviceException;
    public RegisterEventTopicResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public RegisterEventTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}