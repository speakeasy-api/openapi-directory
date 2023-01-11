package openapisdk.models.operations;



public class SearchStickersResponse {
    public String contentType;
    public SearchStickersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchStickersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchStickers200ApplicationJson searchStickers200ApplicationJSONObject;
    public SearchStickersResponse withSearchStickers200ApplicationJsonObject(SearchStickers200ApplicationJson searchStickers200ApplicationJSONObject) {
        this.searchStickers200ApplicationJSONObject = searchStickers200ApplicationJSONObject;
        return this;
    }
}