package openapisdk.models.operations;



public class TrendingGifsResponse {
    public String contentType;
    public TrendingGifsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TrendingGifsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TrendingGifs200ApplicationJson trendingGifs200ApplicationJSONObject;
    public TrendingGifsResponse withTrendingGifs200ApplicationJsonObject(TrendingGifs200ApplicationJson trendingGifs200ApplicationJSONObject) {
        this.trendingGifs200ApplicationJSONObject = trendingGifs200ApplicationJSONObject;
        return this;
    }
}