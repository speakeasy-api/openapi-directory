package openapisdk.models.operations;



public class GetApiKeysIdResponse {
    public openapisdk.models.shared.ApiKeyEntity apiKeyEntity;
    public GetApiKeysIdResponse withApiKeyEntity(openapisdk.models.shared.ApiKeyEntity apiKeyEntity) {
        this.apiKeyEntity = apiKeyEntity;
        return this;
    }
    public String contentType;
    public GetApiKeysIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiKeysIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}