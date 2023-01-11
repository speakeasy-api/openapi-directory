package openapisdk.models.operations;



public class GetCrawlStatisticsUrlsResponse {
    public String contentType;
    public GetCrawlStatisticsUrlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetCrawlStatisticsUrlsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetCrawlStatisticsUrlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] getCrawlStatisticsUrls200ApplicationJSONAnies;
    public GetCrawlStatisticsUrlsResponse withGetCrawlStatisticsUrls200ApplicationJsonAnies(Object[] getCrawlStatisticsUrls200ApplicationJSONAnies) {
        this.getCrawlStatisticsUrls200ApplicationJSONAnies = getCrawlStatisticsUrls200ApplicationJSONAnies;
        return this;
    }
}