package openapisdk.models.operations;



public class GetPlayStatsResponse {
    public String contentType;
    public GetPlayStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayStat[] playStats;
    public GetPlayStatsResponse withPlayStats(openapisdk.models.shared.PlayStat[] playStats) {
        this.playStats = playStats;
        return this;
    }
    public Long statusCode;
    public GetPlayStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}