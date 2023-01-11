package openapisdk.models.operations;



public class RunAMonitorResponse {
    public String contentType;
    public RunAMonitorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RunAMonitorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RunAMonitor200ApplicationJson runAMonitor200ApplicationJSONObject;
    public RunAMonitorResponse withRunAMonitor200ApplicationJsonObject(RunAMonitor200ApplicationJson runAMonitor200ApplicationJSONObject) {
        this.runAMonitor200ApplicationJSONObject = runAMonitor200ApplicationJSONObject;
        return this;
    }
}