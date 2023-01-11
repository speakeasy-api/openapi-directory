package openapisdk.models.operations;



public class AgentStoreSetResponse {
    public String contentType;
    public AgentStoreSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentStoreSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String agentStoreSet200ApplicationJSONString;
    public AgentStoreSetResponse withAgentStoreSet200ApplicationJsonString(String agentStoreSet200ApplicationJSONString) {
        this.agentStoreSet200ApplicationJSONString = agentStoreSet200ApplicationJSONString;
        return this;
    }
}