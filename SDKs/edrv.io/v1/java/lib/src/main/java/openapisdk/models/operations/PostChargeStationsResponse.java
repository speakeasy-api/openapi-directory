package openapisdk.models.operations;



public class PostChargeStationsResponse {
    public String contentType;
    public PostChargeStationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostChargeStationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostChargeStations201ApplicationJson postChargeStations201ApplicationJSONObject;
    public PostChargeStationsResponse withPostChargeStations201ApplicationJsonObject(PostChargeStations201ApplicationJson postChargeStations201ApplicationJSONObject) {
        this.postChargeStations201ApplicationJSONObject = postChargeStations201ApplicationJSONObject;
        return this;
    }
}