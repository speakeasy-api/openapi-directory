package openapisdk.models.operations;



public class GetDailyStatsResponse {
    public String contentType;
    public GetDailyStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DailyStats dailyStats;
    public GetDailyStatsResponse withDailyStats(openapisdk.models.shared.DailyStats dailyStats) {
        this.dailyStats = dailyStats;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetDailyStatsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetDailyStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}