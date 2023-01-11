package openapisdk.models.operations;



public class ApiKeyOwnerResponse {
    public String contentType;
    public ApiKeyOwnerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ApiKeyOwnerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ApiKeyOwner200ApplicationJson apiKeyOwner200ApplicationJSONObject;
    public ApiKeyOwnerResponse withApiKeyOwner200ApplicationJsonObject(ApiKeyOwner200ApplicationJson apiKeyOwner200ApplicationJSONObject) {
        this.apiKeyOwner200ApplicationJSONObject = apiKeyOwner200ApplicationJSONObject;
        return this;
    }
}