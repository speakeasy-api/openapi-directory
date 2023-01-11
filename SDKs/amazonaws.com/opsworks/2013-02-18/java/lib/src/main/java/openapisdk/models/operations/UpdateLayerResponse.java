package openapisdk.models.operations;



public class UpdateLayerResponse {
    public String contentType;
    public UpdateLayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLayerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public UpdateLayerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}