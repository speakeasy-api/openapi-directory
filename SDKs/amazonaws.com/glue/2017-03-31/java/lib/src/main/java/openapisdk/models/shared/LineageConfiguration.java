package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LineageConfiguration
 * Specifies data lineage configuration settings for the crawler.
**/
public class LineageConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerLineageSettings")
    public CrawlerLineageSettingsEnum crawlerLineageSettings;
    public LineageConfiguration withCrawlerLineageSettings(CrawlerLineageSettingsEnum crawlerLineageSettings) {
        this.crawlerLineageSettings = crawlerLineageSettings;
        return this;
    }
}