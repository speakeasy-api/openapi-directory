package openapisdk.models.operations;



public class GetApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities;
    public GetApiKeysResponse withApiKeyEntities(openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities) {
        this.apiKeyEntities = apiKeyEntities;
        return this;
    }
    public String contentType;
    public GetApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}