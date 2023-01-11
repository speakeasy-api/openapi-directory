package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCrawlersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerNames")
    public String[] crawlerNames;
    public ListCrawlersResponse withCrawlerNames(String[] crawlerNames) {
        this.crawlerNames = crawlerNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCrawlersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}