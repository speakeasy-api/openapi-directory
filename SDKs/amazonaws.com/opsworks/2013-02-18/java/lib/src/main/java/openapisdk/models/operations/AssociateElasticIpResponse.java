package openapisdk.models.operations;



public class AssociateElasticIpResponse {
    public String contentType;
    public AssociateElasticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateElasticIpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateElasticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AssociateElasticIpResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}