package openapisdk.models.operations;



public class TeamsListChildResponse {
    public String contentType;
    public TeamsListChildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TeamsListChildResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TeamsListChildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team2[] team2s;
    public TeamsListChildResponse withTeam2s(openapisdk.models.shared.Team2[] team2s) {
        this.team2s = team2s;
        return this;
    }
}