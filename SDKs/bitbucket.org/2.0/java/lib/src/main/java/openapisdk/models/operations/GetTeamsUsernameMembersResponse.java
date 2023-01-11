package openapisdk.models.operations;



public class GetTeamsUsernameMembersResponse {
    public String contentType;
    public GetTeamsUsernameMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamsUsernameMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public GetTeamsUsernameMembersResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, Object> user;
    public GetTeamsUsernameMembersResponse withUser(java.util.Map<String, Object> user) {
        this.user = user;
        return this;
    }
}