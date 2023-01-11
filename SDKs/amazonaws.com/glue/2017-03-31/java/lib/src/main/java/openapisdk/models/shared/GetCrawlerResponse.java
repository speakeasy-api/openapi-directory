package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCrawlerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Crawler")
    public Crawler crawler;
    public GetCrawlerResponse withCrawler(Crawler crawler) {
        this.crawler = crawler;
        return this;
    }
}