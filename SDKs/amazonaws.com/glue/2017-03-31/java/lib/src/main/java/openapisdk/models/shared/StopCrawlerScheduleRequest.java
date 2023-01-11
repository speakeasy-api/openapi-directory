package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopCrawlerScheduleRequest {
    @JsonProperty("CrawlerName")
    public String crawlerName;
    public StopCrawlerScheduleRequest withCrawlerName(String crawlerName) {
        this.crawlerName = crawlerName;
        return this;
    }
}