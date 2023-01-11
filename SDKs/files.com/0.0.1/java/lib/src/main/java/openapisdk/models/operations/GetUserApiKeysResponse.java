package openapisdk.models.operations;



public class GetUserApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities;
    public GetUserApiKeysResponse withApiKeyEntities(openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities) {
        this.apiKeyEntities = apiKeyEntities;
        return this;
    }
    public String contentType;
    public GetUserApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}