package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCrawlerMetricsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerNameList")
    public String[] crawlerNameList;
    public GetCrawlerMetricsRequest withCrawlerNameList(String[] crawlerNameList) {
        this.crawlerNameList = crawlerNameList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public GetCrawlerMetricsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetCrawlerMetricsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}