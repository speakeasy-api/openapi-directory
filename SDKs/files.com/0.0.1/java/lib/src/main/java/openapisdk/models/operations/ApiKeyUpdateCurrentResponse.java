package openapisdk.models.operations;



public class ApiKeyUpdateCurrentResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public ApiKeyUpdateCurrentResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public ApiKeyUpdateCurrentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiKeyUpdateCurrentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}