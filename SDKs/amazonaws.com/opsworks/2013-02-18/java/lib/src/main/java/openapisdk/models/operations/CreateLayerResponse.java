package openapisdk.models.operations;



public class CreateLayerResponse {
    public String contentType;
    public CreateLayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLayerResult createLayerResult;
    public CreateLayerResponse withCreateLayerResult(openapisdk.models.shared.CreateLayerResult createLayerResult) {
        this.createLayerResult = createLayerResult;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateLayerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateLayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateLayerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}