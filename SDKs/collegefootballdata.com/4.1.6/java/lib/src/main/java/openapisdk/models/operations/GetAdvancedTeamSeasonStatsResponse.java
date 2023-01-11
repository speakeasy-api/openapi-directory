package openapisdk.models.operations;



public class GetAdvancedTeamSeasonStatsResponse {
    public openapisdk.models.shared.AdvancedSeasonStat[] advancedSeasonStats;
    public GetAdvancedTeamSeasonStatsResponse withAdvancedSeasonStats(openapisdk.models.shared.AdvancedSeasonStat[] advancedSeasonStats) {
        this.advancedSeasonStats = advancedSeasonStats;
        return this;
    }
    public String contentType;
    public GetAdvancedTeamSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdvancedTeamSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}