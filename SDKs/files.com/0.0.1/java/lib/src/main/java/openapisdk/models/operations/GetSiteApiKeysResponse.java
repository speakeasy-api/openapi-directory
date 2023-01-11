package openapisdk.models.operations;



public class GetSiteApiKeysResponse {
    public openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities;
    public GetSiteApiKeysResponse withApiKeyEntities(openapisdk.models.shared.ApiKeyEntity[] apiKeyEntities) {
        this.apiKeyEntities = apiKeyEntities;
        return this;
    }
    public String contentType;
    public GetSiteApiKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSiteApiKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}