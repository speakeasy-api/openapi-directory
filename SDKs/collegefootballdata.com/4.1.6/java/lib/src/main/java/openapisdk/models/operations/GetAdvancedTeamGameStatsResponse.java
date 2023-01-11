package openapisdk.models.operations;



public class GetAdvancedTeamGameStatsResponse {
    public openapisdk.models.shared.AdvancedGameStat[] advancedGameStats;
    public GetAdvancedTeamGameStatsResponse withAdvancedGameStats(openapisdk.models.shared.AdvancedGameStat[] advancedGameStats) {
        this.advancedGameStats = advancedGameStats;
        return this;
    }
    public String contentType;
    public GetAdvancedTeamGameStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdvancedTeamGameStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}