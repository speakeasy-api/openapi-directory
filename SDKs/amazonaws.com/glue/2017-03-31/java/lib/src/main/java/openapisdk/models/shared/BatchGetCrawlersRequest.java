package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetCrawlersRequest {
    @JsonProperty("CrawlerNames")
    public String[] crawlerNames;
    public BatchGetCrawlersRequest withCrawlerNames(String[] crawlerNames) {
        this.crawlerNames = crawlerNames;
        return this;
    }
}