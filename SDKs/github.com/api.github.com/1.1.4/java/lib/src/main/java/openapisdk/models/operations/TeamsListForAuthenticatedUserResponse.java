package openapisdk.models.operations;



public class TeamsListForAuthenticatedUserResponse {
    public String contentType;
    public TeamsListForAuthenticatedUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListForAuthenticatedUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListForAuthenticatedUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsListForAuthenticatedUserResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.TeamFull[] teamFulls;
    public TeamsListForAuthenticatedUserResponse withTeamFulls(openapisdk.models.shared.TeamFull[] teamFulls) {
        this.teamFulls = teamFulls;
        return this;
    }
}