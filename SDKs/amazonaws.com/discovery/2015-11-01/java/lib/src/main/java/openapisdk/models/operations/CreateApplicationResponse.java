package openapisdk.models.operations;



public class CreateApplicationResponse {
    public Object authorizationErrorException;
    public CreateApplicationResponse withAuthorizationErrorException(Object authorizationErrorException) {
        this.authorizationErrorException = authorizationErrorException;
        return this;
    }
    public String contentType;
    public CreateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateApplicationResponse createApplicationResponse;
    public CreateApplicationResponse withCreateApplicationResponse(openapisdk.models.shared.CreateApplicationResponse createApplicationResponse) {
        this.createApplicationResponse = createApplicationResponse;
        return this;
    }
    public Object homeRegionNotSetException;
    public CreateApplicationResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object invalidParameterException;
    public CreateApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateApplicationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serverInternalErrorException;
    public CreateApplicationResponse withServerInternalErrorException(Object serverInternalErrorException) {
        this.serverInternalErrorException = serverInternalErrorException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}