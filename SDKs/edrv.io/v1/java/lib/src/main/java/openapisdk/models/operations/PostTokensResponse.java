package openapisdk.models.operations;



public class PostTokensResponse {
    public String contentType;
    public PostTokensResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostTokensResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostTokens201ApplicationJson postTokens201ApplicationJSONObject;
    public PostTokensResponse withPostTokens201ApplicationJsonObject(PostTokens201ApplicationJson postTokens201ApplicationJSONObject) {
        this.postTokens201ApplicationJSONObject = postTokens201ApplicationJSONObject;
        return this;
    }
}