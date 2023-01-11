package openapisdk.models.operations;



public class GetApplicationRevisionResponse {
    public Object applicationDoesNotExistException;
    public GetApplicationRevisionResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public GetApplicationRevisionResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public GetApplicationRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApplicationRevisionOutput getApplicationRevisionOutput;
    public GetApplicationRevisionResponse withGetApplicationRevisionOutput(openapisdk.models.shared.GetApplicationRevisionOutput getApplicationRevisionOutput) {
        this.getApplicationRevisionOutput = getApplicationRevisionOutput;
        return this;
    }
    public Object invalidApplicationNameException;
    public GetApplicationRevisionResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidRevisionException;
    public GetApplicationRevisionResponse withInvalidRevisionException(Object invalidRevisionException) {
        this.invalidRevisionException = invalidRevisionException;
        return this;
    }
    public Object revisionDoesNotExistException;
    public GetApplicationRevisionResponse withRevisionDoesNotExistException(Object revisionDoesNotExistException) {
        this.revisionDoesNotExistException = revisionDoesNotExistException;
        return this;
    }
    public Object revisionRequiredException;
    public GetApplicationRevisionResponse withRevisionRequiredException(Object revisionRequiredException) {
        this.revisionRequiredException = revisionRequiredException;
        return this;
    }
    public Long statusCode;
    public GetApplicationRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}