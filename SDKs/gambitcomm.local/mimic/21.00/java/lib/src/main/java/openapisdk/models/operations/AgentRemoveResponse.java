package openapisdk.models.operations;



public class AgentRemoveResponse {
    public String contentType;
    public AgentRemoveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentRemoveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String agentRemove200ApplicationJSONString;
    public AgentRemoveResponse withAgentRemove200ApplicationJsonString(String agentRemove200ApplicationJSONString) {
        this.agentRemove200ApplicationJSONString = agentRemove200ApplicationJSONString;
        return this;
    }
}