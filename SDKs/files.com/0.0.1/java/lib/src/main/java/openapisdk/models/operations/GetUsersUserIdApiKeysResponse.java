package openapisdk.models.operations;



public class GetUsersUserIdApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities;
    public GetUsersUserIdApiKeysResponse withApiKeyEntities(openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities) {
        this.apiKeyEntities = apiKeyEntities;
        return this;
    }
    public String contentType;
    public GetUsersUserIdApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}