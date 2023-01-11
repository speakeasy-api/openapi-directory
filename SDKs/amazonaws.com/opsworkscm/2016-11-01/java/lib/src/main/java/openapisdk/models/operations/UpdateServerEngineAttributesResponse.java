package openapisdk.models.operations;



public class UpdateServerEngineAttributesResponse {
    public String contentType;
    public UpdateServerEngineAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidStateException;
    public UpdateServerEngineAttributesResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateServerEngineAttributesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateServerEngineAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateServerEngineAttributesResponse updateServerEngineAttributesResponse;
    public UpdateServerEngineAttributesResponse withUpdateServerEngineAttributesResponse(openapisdk.models.shared.UpdateServerEngineAttributesResponse updateServerEngineAttributesResponse) {
        this.updateServerEngineAttributesResponse = updateServerEngineAttributesResponse;
        return this;
    }
    public Object validationException;
    public UpdateServerEngineAttributesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}