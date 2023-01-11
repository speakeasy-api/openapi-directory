package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public Object applicationAlreadyExistsException;
    public UpdateApplicationResponse withApplicationAlreadyExistsException(Object applicationAlreadyExistsException) {
        this.applicationAlreadyExistsException = applicationAlreadyExistsException;
        return this;
    }
    public Object applicationDoesNotExistException;
    public UpdateApplicationResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public UpdateApplicationResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidApplicationNameException;
    public UpdateApplicationResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}