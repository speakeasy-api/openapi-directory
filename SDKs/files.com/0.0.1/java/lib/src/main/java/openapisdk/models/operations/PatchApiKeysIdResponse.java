package openapisdk.models.operations;



public class PatchApiKeysIdResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public PatchApiKeysIdResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public PatchApiKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchApiKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}