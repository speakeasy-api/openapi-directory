package openapisdk.models.operations;



public class TranslateGifResponse {
    public String contentType;
    public TranslateGifResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateGifResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TranslateGif200ApplicationJson translateGif200ApplicationJSONObject;
    public TranslateGifResponse withTranslateGif200ApplicationJsonObject(TranslateGif200ApplicationJson translateGif200ApplicationJSONObject) {
        this.translateGif200ApplicationJSONObject = translateGif200ApplicationJSONObject;
        return this;
    }
}