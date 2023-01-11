package openapisdk.models.operations;



public class AgentStoreGetResponse {
    public String contentType;
    public AgentStoreGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentStoreGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String agentStoreGet200ApplicationJSONString;
    public AgentStoreGetResponse withAgentStoreGet200ApplicationJsonString(String agentStoreGet200ApplicationJSONString) {
        this.agentStoreGet200ApplicationJSONString = agentStoreGet200ApplicationJSONString;
        return this;
    }
}