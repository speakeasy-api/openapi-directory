package openapisdk.models.operations;



public class GetTokensResponse {
    public String contentType;
    public GetTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetTokens200ApplicationJson getTokens200ApplicationJSONObject;
    public GetTokensResponse withGetTokens200ApplicationJsonObject(GetTokens200ApplicationJson getTokens200ApplicationJSONObject) {
        this.getTokens200ApplicationJSONObject = getTokens200ApplicationJSONObject;
        return this;
    }
}