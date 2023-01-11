package openapisdk.models.operations;



public class RegisterElasticIpResponse {
    public String contentType;
    public RegisterElasticIpResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegisterElasticIpResult registerElasticIpResult;
    public RegisterElasticIpResponse withRegisterElasticIpResult(openapisdk.models.shared.RegisterElasticIpResult registerElasticIpResult) {
        this.registerElasticIpResult = registerElasticIpResult;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterElasticIpResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterElasticIpResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterElasticIpResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}