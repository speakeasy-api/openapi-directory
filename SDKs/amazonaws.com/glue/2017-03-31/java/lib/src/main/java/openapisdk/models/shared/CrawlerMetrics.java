package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrawlerMetrics
 * Metrics for a specified crawler.
**/
public class CrawlerMetrics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerName")
    public String crawlerName;
    public CrawlerMetrics withCrawlerName(String crawlerName) {
        this.crawlerName = crawlerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastRuntimeSeconds")
    public Double lastRuntimeSeconds;
    public CrawlerMetrics withLastRuntimeSeconds(Double lastRuntimeSeconds) {
        this.lastRuntimeSeconds = lastRuntimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MedianRuntimeSeconds")
    public Double medianRuntimeSeconds;
    public CrawlerMetrics withMedianRuntimeSeconds(Double medianRuntimeSeconds) {
        this.medianRuntimeSeconds = medianRuntimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StillEstimating")
    public Boolean stillEstimating;
    public CrawlerMetrics withStillEstimating(Boolean stillEstimating) {
        this.stillEstimating = stillEstimating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesCreated")
    public Long tablesCreated;
    public CrawlerMetrics withTablesCreated(Long tablesCreated) {
        this.tablesCreated = tablesCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesDeleted")
    public Long tablesDeleted;
    public CrawlerMetrics withTablesDeleted(Long tablesDeleted) {
        this.tablesDeleted = tablesDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablesUpdated")
    public Long tablesUpdated;
    public CrawlerMetrics withTablesUpdated(Long tablesUpdated) {
        this.tablesUpdated = tablesUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeLeftSeconds")
    public Double timeLeftSeconds;
    public CrawlerMetrics withTimeLeftSeconds(Double timeLeftSeconds) {
        this.timeLeftSeconds = timeLeftSeconds;
        return this;
    }
}