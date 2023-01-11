package openapisdk.models.operations;



public class GetStatisticsItemResponse {
    public String contentType;
    public GetStatisticsItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatisticsItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ZoneStats zoneStats;
    public GetStatisticsItemResponse withZoneStats(openapisdk.models.shared.ZoneStats zoneStats) {
        this.zoneStats = zoneStats;
        return this;
    }
}