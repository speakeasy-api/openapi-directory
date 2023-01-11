package openapisdk.models.operations;



public class PostUserApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public PostUserApiKeysResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public PostUserApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUserApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}