package openapisdk.models.operations;



public class ReserveContactResponse {
    public openapisdk.models.shared.ContactIdResponse contactIdResponse;
    public ReserveContactResponse withContactIdResponse(openapisdk.models.shared.ContactIdResponse contactIdResponse) {
        this.contactIdResponse = contactIdResponse;
        return this;
    }
    public String contentType;
    public ReserveContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ReserveContactResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ReserveContactResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public ReserveContactResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ReserveContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}