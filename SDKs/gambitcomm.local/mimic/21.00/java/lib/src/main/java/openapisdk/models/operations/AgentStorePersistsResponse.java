package openapisdk.models.operations;



public class AgentStorePersistsResponse {
    public String contentType;
    public AgentStorePersistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AgentStorePersistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String agentStorePersists200ApplicationJSONString;
    public AgentStorePersistsResponse withAgentStorePersists200ApplicationJsonString(String agentStorePersists200ApplicationJSONString) {
        this.agentStorePersists200ApplicationJSONString = agentStorePersists200ApplicationJSONString;
        return this;
    }
}