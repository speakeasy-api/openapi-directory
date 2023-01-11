package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartCrawlerScheduleRequest {
    @JsonProperty("CrawlerName")
    public String crawlerName;
    public StartCrawlerScheduleRequest withCrawlerName(String crawlerName) {
        this.crawlerName = crawlerName;
        return this;
    }
}