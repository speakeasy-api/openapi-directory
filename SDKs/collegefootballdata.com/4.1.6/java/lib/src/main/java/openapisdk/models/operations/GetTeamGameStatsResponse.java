package openapisdk.models.operations;



public class GetTeamGameStatsResponse {
    public String contentType;
    public GetTeamGameStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamGameStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamGame[] teamGames;
    public GetTeamGameStatsResponse withTeamGames(openapisdk.models.shared.TeamGame[] teamGames) {
        this.teamGames = teamGames;
        return this;
    }
}