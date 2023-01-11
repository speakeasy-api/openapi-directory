package openapisdk.models.operations;



public class CasesGeneralStatsListResponse {
    public String contentType;
    public CasesGeneralStatsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GeneralStats[] generalStats;
    public CasesGeneralStatsListResponse withGeneralStats(openapisdk.models.shared.GeneralStats[] generalStats) {
        this.generalStats = generalStats;
        return this;
    }
    public Long statusCode;
    public CasesGeneralStatsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}