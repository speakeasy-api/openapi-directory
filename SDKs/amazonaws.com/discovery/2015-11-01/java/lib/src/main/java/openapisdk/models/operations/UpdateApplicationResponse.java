package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public Object authorizationErrorException;
    public UpdateApplicationResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public UpdateApplicationResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateApplicationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public UpdateApplicationResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateApplicationResponse;
    public UpdateApplicationResponse withUpdateApplicationResponse(java.util.Map<String, Object> updateApplicationResponse) {
        this.updateApplicationResponse = updateApplicationResponse;
        return this;
    }
}