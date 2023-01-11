package openapisdk.models.operations;



public class SearchGifsResponse {
    public String contentType;
    public SearchGifsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchGifsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SearchGifs200ApplicationJson searchGifs200ApplicationJSONObject;
    public SearchGifsResponse withSearchGifs200ApplicationJsonObject(SearchGifs200ApplicationJson searchGifs200ApplicationJSONObject) {
        this.searchGifs200ApplicationJSONObject = searchGifs200ApplicationJSONObject;
        return this;
    }
}