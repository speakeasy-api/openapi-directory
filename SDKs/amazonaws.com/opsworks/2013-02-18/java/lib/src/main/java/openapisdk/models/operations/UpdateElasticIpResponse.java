package openapisdk.models.operations;



public class UpdateElasticIpResponse {
    public String contentType;
    public UpdateElasticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateElasticIpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateElasticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateElasticIpResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}