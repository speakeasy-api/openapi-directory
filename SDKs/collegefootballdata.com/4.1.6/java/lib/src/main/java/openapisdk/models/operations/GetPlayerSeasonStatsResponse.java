package openapisdk.models.operations;



public class GetPlayerSeasonStatsResponse {
    public String contentType;
    public GetPlayerSeasonStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayerSeasonStat[] playerSeasonStats;
    public GetPlayerSeasonStatsResponse withPlayerSeasonStats(openapisdk.models.shared.PlayerSeasonStat[] playerSeasonStats) {
        this.playerSeasonStats = playerSeasonStats;
        return this;
    }
    public Long statusCode;
    public GetPlayerSeasonStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}