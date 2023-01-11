package openapisdk.models.operations;



public class DeleteMonitorResponse {
    public String contentType;
    public DeleteMonitorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteMonitorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteMonitor200ApplicationJson deleteMonitor200ApplicationJSONObject;
    public DeleteMonitorResponse withDeleteMonitor200ApplicationJsonObject(DeleteMonitor200ApplicationJson deleteMonitor200ApplicationJSONObject) {
        this.deleteMonitor200ApplicationJSONObject = deleteMonitor200ApplicationJSONObject;
        return this;
    }
    public DeleteMonitor404ApplicationJson deleteMonitor404ApplicationJSONObject;
    public DeleteMonitorResponse withDeleteMonitor404ApplicationJsonObject(DeleteMonitor404ApplicationJson deleteMonitor404ApplicationJSONObject) {
        this.deleteMonitor404ApplicationJSONObject = deleteMonitor404ApplicationJSONObject;
        return this;
    }
}