package openapisdk.models.operations;



public class GetChangedStateListResponse {
    public openapisdk.models.shared.AgentState[] agentStates;
    public GetChangedStateListResponse withAgentStates(openapisdk.models.shared.AgentState[] agentStates) {
        this.agentStates = agentStates;
        return this;
    }
    public String contentType;
    public GetChangedStateListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChangedStateListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}