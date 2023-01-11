package openapisdk.models.operations;



public class RegisterRdsDbInstanceResponse {
    public String contentType;
    public RegisterRdsDbInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterRdsDbInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterRdsDbInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterRdsDbInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}