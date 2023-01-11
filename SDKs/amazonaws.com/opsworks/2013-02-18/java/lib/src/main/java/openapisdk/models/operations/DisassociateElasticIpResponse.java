package openapisdk.models.operations;



public class DisassociateElasticIpResponse {
    public String contentType;
    public DisassociateElasticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateElasticIpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisassociateElasticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DisassociateElasticIpResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}