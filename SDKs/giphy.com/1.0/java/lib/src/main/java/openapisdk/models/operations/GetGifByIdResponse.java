package openapisdk.models.operations;



public class GetGifByIdResponse {
    public String contentType;
    public GetGifByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGifByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGifById200ApplicationJson getGifById200ApplicationJSONObject;
    public GetGifByIdResponse withGetGifById200ApplicationJsonObject(GetGifById200ApplicationJson getGifById200ApplicationJSONObject) {
        this.getGifById200ApplicationJSONObject = getGifById200ApplicationJSONObject;
        return this;
    }
}