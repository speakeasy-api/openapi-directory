package openapisdk.models.operations;



public class TranslateStickerResponse {
    public String contentType;
    public TranslateStickerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateStickerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TranslateSticker200ApplicationJson translateSticker200ApplicationJSONObject;
    public TranslateStickerResponse withTranslateSticker200ApplicationJsonObject(TranslateSticker200ApplicationJson translateSticker200ApplicationJSONObject) {
        this.translateSticker200ApplicationJSONObject = translateSticker200ApplicationJSONObject;
        return this;
    }
}