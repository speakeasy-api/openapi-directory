package openapisdk.models.operations;



public class GetTeamSeasonStatsResponse {
    public String contentType;
    public GetTeamSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTeamSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TeamSeasonStat[] teamSeasonStats;
    public GetTeamSeasonStatsResponse withTeamSeasonStats(openapisdk.models.shared.TeamSeasonStat[] teamSeasonStats) {
        this.teamSeasonStats = teamSeasonStats;
        return this;
    }
}