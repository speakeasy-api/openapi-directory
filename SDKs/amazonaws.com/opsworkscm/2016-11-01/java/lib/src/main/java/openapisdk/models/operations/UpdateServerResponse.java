package openapisdk.models.operations;



public class UpdateServerResponse {
    public String contentType;
    public UpdateServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidStateException;
    public UpdateServerResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateServerResponse updateServerResponse;
    public UpdateServerResponse withUpdateServerResponse(openapisdk.models.shared.UpdateServerResponse updateServerResponse) {
        this.updateServerResponse = updateServerResponse;
        return this;
    }
    public Object validationException;
    public UpdateServerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}