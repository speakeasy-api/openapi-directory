package openapisdk.models.operations;



public class DeregisterEventTopicResponse {
    public Object clientException;
    public DeregisterEventTopicResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeregisterEventTopicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterEventTopicResult;
    public DeregisterEventTopicResponse withDeregisterEventTopicResult(java.util.Map<String, Object> deregisterEventTopicResult) {
        this.deregisterEventTopicResult = deregisterEventTopicResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeregisterEventTopicResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterEventTopicResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DeregisterEventTopicResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeregisterEventTopicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}