package openapisdk.models.operations;



public class DeregisterRdsDbInstanceResponse {
    public String contentType;
    public DeregisterRdsDbInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterRdsDbInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterRdsDbInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterRdsDbInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}