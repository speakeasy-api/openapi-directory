package openapisdk.models.operations;



public class TeamsListResponse {
    public String contentType;
    public TeamsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamList teamList;
    public TeamsListResponse withTeamList(openapisdk.models.shared.TeamList teamList) {
        this.teamList = teamList;
        return this;
    }
}