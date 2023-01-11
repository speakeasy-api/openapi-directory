package openapisdk.models.operations;



public class GetRankingsResponse {
    public String contentType;
    public GetRankingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RankingWeek[] rankingWeeks;
    public GetRankingsResponse withRankingWeeks(openapisdk.models.shared.RankingWeek[] rankingWeeks) {
        this.rankingWeeks = rankingWeeks;
        return this;
    }
    public Long statusCode;
    public GetRankingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}