package openapisdk.models.operations;



public class GetTeamsUsernameResponse {
    public String contentType;
    public GetTeamsUsernameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> team;
    public GetTeamsUsernameResponse withTeam(java.util.Map<String, Object> team) {
        this.team = team;
        return this;
    }
}