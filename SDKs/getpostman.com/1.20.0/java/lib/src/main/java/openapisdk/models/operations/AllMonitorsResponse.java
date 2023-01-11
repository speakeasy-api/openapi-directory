package openapisdk.models.operations;



public class AllMonitorsResponse {
    public String contentType;
    public AllMonitorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AllMonitorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AllMonitors200ApplicationJson allMonitors200ApplicationJSONObject;
    public AllMonitorsResponse withAllMonitors200ApplicationJsonObject(AllMonitors200ApplicationJson allMonitors200ApplicationJSONObject) {
        this.allMonitors200ApplicationJSONObject = allMonitors200ApplicationJSONObject;
        return this;
    }
}