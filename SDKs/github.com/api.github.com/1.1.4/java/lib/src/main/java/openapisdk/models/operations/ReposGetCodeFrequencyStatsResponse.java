package openapisdk.models.operations;



public class ReposGetCodeFrequencyStatsResponse {
    public String contentType;
    public ReposGetCodeFrequencyStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCodeFrequencyStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long[][] codeFrequencyStats;
    public ReposGetCodeFrequencyStatsResponse withCodeFrequencyStats(Long[][] codeFrequencyStats) {
        this.codeFrequencyStats = codeFrequencyStats;
        return this;
    }
}