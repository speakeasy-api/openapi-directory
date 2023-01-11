package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCrawlersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Crawlers")
    public Crawler[] crawlers;
    public GetCrawlersResponse withCrawlers(Crawler[] crawlers) {
        this.crawlers = crawlers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetCrawlersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}