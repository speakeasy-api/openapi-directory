package openapisdk.models.operations;



public class TeamsListResponse {
    public String contentType;
    public TeamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public TeamsListResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public TeamsListResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
}