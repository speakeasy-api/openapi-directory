package openapisdk.models.operations;



public class OrgsListInvitationTeamsResponse {
    public String contentType;
    public OrgsListInvitationTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public OrgsListInvitationTeamsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public OrgsListInvitationTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public OrgsListInvitationTeamsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public OrgsListInvitationTeamsResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
}