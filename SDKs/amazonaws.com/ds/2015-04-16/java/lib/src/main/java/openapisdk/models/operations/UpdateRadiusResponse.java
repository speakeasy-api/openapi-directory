package openapisdk.models.operations;



public class UpdateRadiusResponse {
    public Object clientException;
    public UpdateRadiusResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateRadiusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public UpdateRadiusResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateRadiusResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public UpdateRadiusResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateRadiusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateRadiusResult;
    public UpdateRadiusResponse withUpdateRadiusResult(java.util.Map<String, Object> updateRadiusResult) {
        this.updateRadiusResult = updateRadiusResult;
        return this;
    }
}