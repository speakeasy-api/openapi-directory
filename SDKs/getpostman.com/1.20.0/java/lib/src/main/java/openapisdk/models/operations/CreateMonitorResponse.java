package openapisdk.models.operations;



public class CreateMonitorResponse {
    public String contentType;
    public CreateMonitorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateMonitorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateMonitor200ApplicationJson createMonitor200ApplicationJSONObject;
    public CreateMonitorResponse withCreateMonitor200ApplicationJsonObject(CreateMonitor200ApplicationJson createMonitor200ApplicationJSONObject) {
        this.createMonitor200ApplicationJSONObject = createMonitor200ApplicationJSONObject;
        return this;
    }
    public CreateMonitor400ApplicationJson createMonitor400ApplicationJSONObject;
    public CreateMonitorResponse withCreateMonitor400ApplicationJsonObject(CreateMonitor400ApplicationJson createMonitor400ApplicationJSONObject) {
        this.createMonitor400ApplicationJSONObject = createMonitor400ApplicationJSONObject;
        return this;
    }
}