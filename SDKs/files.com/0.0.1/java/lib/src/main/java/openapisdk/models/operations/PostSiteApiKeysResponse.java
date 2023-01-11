package openapisdk.models.operations;



public class PostSiteApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public PostSiteApiKeysResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public PostSiteApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSiteApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}