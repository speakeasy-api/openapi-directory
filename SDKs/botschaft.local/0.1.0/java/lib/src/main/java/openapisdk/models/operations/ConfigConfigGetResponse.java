package openapisdk.models.operations;



public class ConfigConfigGetResponse {
    public openapisdk.models.shared.Config config;
    public ConfigConfigGetResponse withConfig(openapisdk.models.shared.Config config) {
        this.config = config;
        return this;
    }
    public String contentType;
    public ConfigConfigGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public ConfigConfigGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public ConfigConfigGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}