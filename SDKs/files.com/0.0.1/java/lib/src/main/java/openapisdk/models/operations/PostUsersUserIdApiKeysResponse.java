package openapisdk.models.operations;



public class PostUsersUserIdApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public PostUsersUserIdApiKeysResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public PostUsersUserIdApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostUsersUserIdApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}