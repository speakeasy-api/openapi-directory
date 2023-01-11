package openapisdk.models.operations;



public class StopAllAgentsResponse {
    public String contentType;
    public StopAllAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopAllAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> stopAllAgents200ApplicationJSONObject;
    public StopAllAgentsResponse withStopAllAgents200ApplicationJsonObject(java.util.Map<String, Integer> stopAllAgents200ApplicationJSONObject) {
        this.stopAllAgents200ApplicationJSONObject = stopAllAgents200ApplicationJSONObject;
        return this;
    }
}