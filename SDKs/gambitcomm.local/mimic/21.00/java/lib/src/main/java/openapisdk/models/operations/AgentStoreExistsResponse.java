package openapisdk.models.operations;



public class AgentStoreExistsResponse {
    public String contentType;
    public AgentStoreExistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentStoreExistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String agentStoreExists200ApplicationJSONString;
    public AgentStoreExistsResponse withAgentStoreExists200ApplicationJsonString(String agentStoreExists200ApplicationJSONString) {
        this.agentStoreExists200ApplicationJSONString = agentStoreExists200ApplicationJSONString;
        return this;
    }
}