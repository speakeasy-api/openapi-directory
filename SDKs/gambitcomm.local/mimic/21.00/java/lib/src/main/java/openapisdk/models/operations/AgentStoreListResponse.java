package openapisdk.models.operations;



public class AgentStoreListResponse {
    public String contentType;
    public AgentStoreListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentStoreListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] agentStoreList200ApplicationJSONStrings;
    public AgentStoreListResponse withAgentStoreList200ApplicationJsonStrings(String[] agentStoreList200ApplicationJSONStrings) {
        this.agentStoreList200ApplicationJSONStrings = agentStoreList200ApplicationJSONStrings;
        return this;
    }
}