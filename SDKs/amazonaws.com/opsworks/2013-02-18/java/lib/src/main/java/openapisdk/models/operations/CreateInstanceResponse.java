package openapisdk.models.operations;



public class CreateInstanceResponse {
    public String contentType;
    public CreateInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateInstanceResult createInstanceResult;
    public CreateInstanceResponse withCreateInstanceResult(openapisdk.models.shared.CreateInstanceResult createInstanceResult) {
        this.createInstanceResult = createInstanceResult;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateInstanceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateInstanceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}