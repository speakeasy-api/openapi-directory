package openapisdk.models.operations;



public class RandomStickerResponse {
    public String contentType;
    public RandomStickerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RandomStickerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RandomSticker200ApplicationJson randomSticker200ApplicationJSONObject;
    public RandomStickerResponse withRandomSticker200ApplicationJsonObject(RandomSticker200ApplicationJson randomSticker200ApplicationJSONObject) {
        this.randomSticker200ApplicationJSONObject = randomSticker200ApplicationJSONObject;
        return this;
    }
}