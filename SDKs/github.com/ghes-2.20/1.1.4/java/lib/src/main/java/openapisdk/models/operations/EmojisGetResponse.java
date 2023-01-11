package openapisdk.models.operations;



public class EmojisGetResponse {
    public String contentType;
    public EmojisGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EmojisGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, String> emojisGet200ApplicationJSONObject;
    public EmojisGetResponse withEmojisGet200ApplicationJsonObject(java.util.Map<String, String> emojisGet200ApplicationJSONObject) {
        this.emojisGet200ApplicationJSONObject = emojisGet200ApplicationJSONObject;
        return this;
    }
}