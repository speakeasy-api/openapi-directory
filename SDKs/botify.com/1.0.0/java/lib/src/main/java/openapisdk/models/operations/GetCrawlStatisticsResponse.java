package openapisdk.models.operations;



public class GetCrawlStatisticsResponse {
    public String contentType;
    public GetCrawlStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CrawlStatistics crawlStatistics;
    public GetCrawlStatisticsResponse withCrawlStatistics(openapisdk.models.shared.CrawlStatistics crawlStatistics) {
        this.crawlStatistics = crawlStatistics;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetCrawlStatisticsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetCrawlStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}