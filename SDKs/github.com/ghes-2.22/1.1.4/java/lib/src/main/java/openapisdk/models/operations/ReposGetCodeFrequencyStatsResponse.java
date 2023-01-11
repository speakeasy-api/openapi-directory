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
    public java.util.Map<String, Object> reposGetCodeFrequencyStats202ApplicationJSONObject;
    public ReposGetCodeFrequencyStatsResponse withReposGetCodeFrequencyStats202ApplicationJsonObject(java.util.Map<String, Object> reposGetCodeFrequencyStats202ApplicationJSONObject) {
        this.reposGetCodeFrequencyStats202ApplicationJSONObject = reposGetCodeFrequencyStats202ApplicationJSONObject;
        return this;
    }
}