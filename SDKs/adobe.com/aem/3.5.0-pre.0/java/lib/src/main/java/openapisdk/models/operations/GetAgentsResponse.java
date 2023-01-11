package openapisdk.models.operations;



public class GetAgentsResponse {
    public String contentType;
    public GetAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String getAgentsDefaultApplicationJSONString;
    public GetAgentsResponse withGetAgentsDefaultApplicationJsonString(String getAgentsDefaultApplicationJSONString) {
        this.getAgentsDefaultApplicationJSONString = getAgentsDefaultApplicationJSONString;
        return this;
    }
}