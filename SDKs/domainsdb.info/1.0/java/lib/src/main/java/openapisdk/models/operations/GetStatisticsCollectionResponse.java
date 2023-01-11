package openapisdk.models.operations;



public class GetStatisticsCollectionResponse {
    public String contentType;
    public GetStatisticsCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatisticsCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ZoneStats[] zoneStats;
    public GetStatisticsCollectionResponse withZoneStats(openapisdk.models.shared.ZoneStats[] zoneStats) {
        this.zoneStats = zoneStats;
        return this;
    }
}