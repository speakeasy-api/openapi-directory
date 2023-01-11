package openapisdk.models.operations;



public class StartAllAgentsResponse {
    public String contentType;
    public StartAllAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StartAllAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Integer> startAllAgents200ApplicationJSONObject;
    public StartAllAgentsResponse withStartAllAgents200ApplicationJsonObject(java.util.Map<String, Integer> startAllAgents200ApplicationJSONObject) {
        this.startAllAgents200ApplicationJSONObject = startAllAgents200ApplicationJSONObject;
        return this;
    }
}