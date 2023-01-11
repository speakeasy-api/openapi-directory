package openapisdk.models.operations;



public class DeleteLayerResponse {
    public String contentType;
    public DeleteLayerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteLayerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteLayerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteLayerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}