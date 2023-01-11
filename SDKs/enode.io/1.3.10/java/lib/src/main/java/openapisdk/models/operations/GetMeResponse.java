package openapisdk.models.operations;



public class GetMeResponse {
    public String contentType;
    public GetMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetMe200ApplicationJson getMe200ApplicationJSONObject;
    public GetMeResponse withGetMe200ApplicationJsonObject(GetMe200ApplicationJson getMe200ApplicationJSONObject) {
        this.getMe200ApplicationJSONObject = getMe200ApplicationJSONObject;
        return this;
    }
}