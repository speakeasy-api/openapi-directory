package openapisdk.models.operations;



public class CreateAppResponse {
    public String contentType;
    public CreateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAppResult createAppResult;
    public CreateAppResponse withCreateAppResult(openapisdk.models.shared.CreateAppResult createAppResult) {
        this.createAppResult = createAppResult;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAppResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateAppResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}