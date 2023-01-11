package openapisdk.models.operations;



public class GetCrawlStatisticsByFrequencyResponse {
    public String contentType;
    public GetCrawlStatisticsByFrequencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CrawlStatisticsTime crawlStatisticsTime;
    public GetCrawlStatisticsByFrequencyResponse withCrawlStatisticsTime(openapisdk.models.shared.CrawlStatisticsTime crawlStatisticsTime) {
        this.crawlStatisticsTime = crawlStatisticsTime;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetCrawlStatisticsByFrequencyResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetCrawlStatisticsByFrequencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}