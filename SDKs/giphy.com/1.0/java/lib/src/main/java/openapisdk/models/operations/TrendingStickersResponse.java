package openapisdk.models.operations;



public class TrendingStickersResponse {
    public String contentType;
    public TrendingStickersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrendingStickersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrendingStickers200ApplicationJson trendingStickers200ApplicationJSONObject;
    public TrendingStickersResponse withTrendingStickers200ApplicationJsonObject(TrendingStickers200ApplicationJson trendingStickers200ApplicationJSONObject) {
        this.trendingStickers200ApplicationJSONObject = trendingStickers200ApplicationJSONObject;
        return this;
    }
}