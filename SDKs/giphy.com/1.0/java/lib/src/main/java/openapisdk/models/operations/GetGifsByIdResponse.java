package openapisdk.models.operations;



public class GetGifsByIdResponse {
    public String contentType;
    public GetGifsByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGifsByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGifsById200ApplicationJson getGifsById200ApplicationJSONObject;
    public GetGifsByIdResponse withGetGifsById200ApplicationJsonObject(GetGifsById200ApplicationJson getGifsById200ApplicationJSONObject) {
        this.getGifsById200ApplicationJSONObject = getGifsById200ApplicationJSONObject;
        return this;
    }
}