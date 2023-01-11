package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrawlerMetricsRequest {
    public GetCrawlerMetricsQueryParams queryParams;
    public GetCrawlerMetricsRequest withQueryParams(GetCrawlerMetricsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCrawlerMetricsHeaders headers;
    public GetCrawlerMetricsRequest withHeaders(GetCrawlerMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCrawlerMetricsRequest request;
    public GetCrawlerMetricsRequest withRequest(openapisdk.models.shared.GetCrawlerMetricsRequest request) {
        this.request = request;
        return this;
    }
}