package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PageRankLost {
    @JsonProperty("external")
    public Float external;
    public PageRankLost withExternal(Float external) {
        this.external = external;
        return this;
    }
    @JsonProperty("non_crawled")
    public Float nonCrawled;
    public PageRankLost withNonCrawled(Float nonCrawled) {
        this.nonCrawled = nonCrawled;
        return this;
    }
    @JsonProperty("robots_txt")
    public Float robotsTxt;
    public PageRankLost withRobotsTxt(Float robotsTxt) {
        this.robotsTxt = robotsTxt;
        return this;
    }
}