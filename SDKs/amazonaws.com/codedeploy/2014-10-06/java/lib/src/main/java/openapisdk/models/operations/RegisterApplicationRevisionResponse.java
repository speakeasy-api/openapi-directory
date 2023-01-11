package openapisdk.models.operations;



public class RegisterApplicationRevisionResponse {
    public Object applicationDoesNotExistException;
    public RegisterApplicationRevisionResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public RegisterApplicationRevisionResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public RegisterApplicationRevisionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object descriptionTooLongException;
    public RegisterApplicationRevisionResponse withDescriptionTooLongException(Object descriptionTooLongException) {
        this.descriptionTooLongException = descriptionTooLongException;
        return this;
    }
    public Object invalidApplicationNameException;
    public RegisterApplicationRevisionResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidRevisionException;
    public RegisterApplicationRevisionResponse withInvalidRevisionException(Object invalidRevisionException) {
        this.invalidRevisionException = invalidRevisionException;
        return this;
    }
    public Object revisionRequiredException;
    public RegisterApplicationRevisionResponse withRevisionRequiredException(Object revisionRequiredException) {
        this.revisionRequiredException = revisionRequiredException;
        return this;
    }
    public Long statusCode;
    public RegisterApplicationRevisionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}