package openapisdk.models.operations;



public class DeregisterElasticIpResponse {
    public String contentType;
    public DeregisterElasticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterElasticIpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterElasticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterElasticIpResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}