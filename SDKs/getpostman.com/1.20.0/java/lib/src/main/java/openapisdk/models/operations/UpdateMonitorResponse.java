package openapisdk.models.operations;



public class UpdateMonitorResponse {
    public String contentType;
    public UpdateMonitorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMonitorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateMonitor200ApplicationJson updateMonitor200ApplicationJSONObject;
    public UpdateMonitorResponse withUpdateMonitor200ApplicationJsonObject(UpdateMonitor200ApplicationJson updateMonitor200ApplicationJSONObject) {
        this.updateMonitor200ApplicationJSONObject = updateMonitor200ApplicationJSONObject;
        return this;
    }
}