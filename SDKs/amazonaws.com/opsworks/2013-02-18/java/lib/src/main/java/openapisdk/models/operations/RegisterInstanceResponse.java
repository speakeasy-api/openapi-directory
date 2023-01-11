package openapisdk.models.operations;



public class RegisterInstanceResponse {
    public String contentType;
    public RegisterInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegisterInstanceResult registerInstanceResult;
    public RegisterInstanceResponse withRegisterInstanceResult(openapisdk.models.shared.RegisterInstanceResult registerInstanceResult) {
        this.registerInstanceResult = registerInstanceResult;
        return this;
    }
    public Object resourceNotFoundException;
    public RegisterInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public RegisterInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public RegisterInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}