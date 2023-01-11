package openapisdk.models.operations;



public class AssignInstanceResponse {
    public String contentType;
    public AssignInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public AssignInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssignInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AssignInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}