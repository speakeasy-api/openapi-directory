package openapisdk.models.operations;



public class ReposGetParticipationStatsResponse {
    public String contentType;
    public ReposGetParticipationStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetParticipationStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReposGetParticipationStatsResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.ParticipationStats participationStats;
    public ReposGetParticipationStatsResponse withParticipationStats(openapisdk.models.shared.ParticipationStats participationStats) {
        this.participationStats = participationStats;
        return this;
    }
}