package openapisdk.models.operations;



public class CancelContactResponse {
    public openapisdk.models.shared.ContactIdResponse contactIdResponse;
    public CancelContactResponse withContactIdResponse(openapisdk.models.shared.ContactIdResponse contactIdResponse) {
        this.contactIdResponse = contactIdResponse;
        return this;
    }
    public String contentType;
    public CancelContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public CancelContactResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public CancelContactResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}