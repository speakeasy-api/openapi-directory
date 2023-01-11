package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCrawlerMetricsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerMetricsList")
    public CrawlerMetrics[] crawlerMetricsList;
    public GetCrawlerMetricsResponse withCrawlerMetricsList(CrawlerMetrics[] crawlerMetricsList) {
        this.crawlerMetricsList = crawlerMetricsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetCrawlerMetricsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}