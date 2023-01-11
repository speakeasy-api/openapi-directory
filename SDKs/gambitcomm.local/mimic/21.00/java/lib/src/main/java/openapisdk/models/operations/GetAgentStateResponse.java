package openapisdk.models.operations;



public class GetAgentStateResponse {
    public String contentType;
    public GetAgentStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Integer getAgentState200ApplicationJSONInt32Integer;
    public GetAgentStateResponse withGetAgentState200ApplicationJsonInt32Integer(Integer getAgentState200ApplicationJSONInt32Integer) {
        this.getAgentState200ApplicationJSONInt32Integer = getAgentState200ApplicationJSONInt32Integer;
        return this;
    }
}