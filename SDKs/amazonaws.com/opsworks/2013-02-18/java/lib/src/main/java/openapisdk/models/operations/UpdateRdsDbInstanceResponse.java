package openapisdk.models.operations;



public class UpdateRdsDbInstanceResponse {
    public String contentType;
    public UpdateRdsDbInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateRdsDbInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRdsDbInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateRdsDbInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}