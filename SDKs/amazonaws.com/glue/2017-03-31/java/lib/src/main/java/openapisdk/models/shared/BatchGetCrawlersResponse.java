package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetCrawlersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Crawlers")
    public Crawler[] crawlers;
    public BatchGetCrawlersResponse withCrawlers(Crawler[] crawlers) {
        this.crawlers = crawlers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlersNotFound")
    public String[] crawlersNotFound;
    public BatchGetCrawlersResponse withCrawlersNotFound(String[] crawlersNotFound) {
        this.crawlersNotFound = crawlersNotFound;
        return this;
    }
}