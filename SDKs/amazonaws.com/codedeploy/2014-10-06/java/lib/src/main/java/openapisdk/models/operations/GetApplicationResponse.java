package openapisdk.models.operations;



public class GetApplicationResponse {
    public Object applicationDoesNotExistException;
    public GetApplicationResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public GetApplicationResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public GetApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetApplicationOutput getApplicationOutput;
    public GetApplicationResponse withGetApplicationOutput(openapisdk.models.shared.GetApplicationOutput getApplicationOutput) {
        this.getApplicationOutput = getApplicationOutput;
        return this;
    }
    public Object invalidApplicationNameException;
    public GetApplicationResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Long statusCode;
    public GetApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}