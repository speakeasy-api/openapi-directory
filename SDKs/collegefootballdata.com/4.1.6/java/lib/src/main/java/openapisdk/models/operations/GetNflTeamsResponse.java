package openapisdk.models.operations;



public class GetNflTeamsResponse {
    public String contentType;
    public GetNflTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DraftTeam[] draftTeams;
    public GetNflTeamsResponse withDraftTeams(openapisdk.models.shared.DraftTeam[] draftTeams) {
        this.draftTeams = draftTeams;
        return this;
    }
    public Long statusCode;
    public GetNflTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}