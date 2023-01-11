package openapisdk.models.operations;



public class SingleMonitorResponse {
    public String contentType;
    public SingleMonitorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SingleMonitorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public SingleMonitor200ApplicationJson singleMonitor200ApplicationJSONObject;
    public SingleMonitorResponse withSingleMonitor200ApplicationJsonObject(SingleMonitor200ApplicationJson singleMonitor200ApplicationJSONObject) {
        this.singleMonitor200ApplicationJSONObject = singleMonitor200ApplicationJSONObject;
        return this;
    }
    public SingleMonitor404ApplicationJson singleMonitor404ApplicationJSONObject;
    public SingleMonitorResponse withSingleMonitor404ApplicationJsonObject(SingleMonitor404ApplicationJson singleMonitor404ApplicationJSONObject) {
        this.singleMonitor404ApplicationJSONObject = singleMonitor404ApplicationJSONObject;
        return this;
    }
}