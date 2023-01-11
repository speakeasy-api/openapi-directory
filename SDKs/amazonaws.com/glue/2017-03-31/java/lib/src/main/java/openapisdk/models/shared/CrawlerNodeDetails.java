package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrawlerNodeDetails
 * The details of a Crawler node present in the workflow.
**/
public class CrawlerNodeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Crawls")
    public Crawl[] crawls;
    public CrawlerNodeDetails withCrawls(Crawl[] crawls) {
        this.crawls = crawls;
        return this;
    }
}