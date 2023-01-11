package openapisdk.models.operations;



public class EnableRadiusResponse {
    public Object clientException;
    public EnableRadiusResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public EnableRadiusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> enableRadiusResult;
    public EnableRadiusResponse withEnableRadiusResult(java.util.Map<String, Object> enableRadiusResult) {
        this.enableRadiusResult = enableRadiusResult;
        return this;
    }
    public Object entityAlreadyExistsException;
    public EnableRadiusResponse withEntityAlreadyExistsException(Object entityAlreadyExistsException) {
        this.entityAlreadyExistsException = entityAlreadyExistsException;
        return this;
    }
    public Object entityDoesNotExistException;
    public EnableRadiusResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public EnableRadiusResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public EnableRadiusResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public EnableRadiusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}