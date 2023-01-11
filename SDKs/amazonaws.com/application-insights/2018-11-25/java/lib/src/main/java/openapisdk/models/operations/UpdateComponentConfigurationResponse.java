package openapisdk.models.operations;



public class UpdateComponentConfigurationResponse {
    public String contentType;
    public UpdateComponentConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateComponentConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateComponentConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateComponentConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateComponentConfigurationResponse;
    public UpdateComponentConfigurationResponse withUpdateComponentConfigurationResponse(java.util.Map<String, Object> updateComponentConfigurationResponse) {
        this.updateComponentConfigurationResponse = updateComponentConfigurationResponse;
        return this;
    }
    public Object validationException;
    public UpdateComponentConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}