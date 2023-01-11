package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CrawlStatistics {
    @JsonProperty("depth_current")
    public Long depthCurrent;
    public CrawlStatistics withDepthCurrent(Long depthCurrent) {
        this.depthCurrent = depthCurrent;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("last_upd_dt")
    public OffsetDateTime lastUpdDt;
    public CrawlStatistics withLastUpdDt(OffsetDateTime lastUpdDt) {
        this.lastUpdDt = lastUpdDt;
        return this;
    }
    @JsonProperty("pages_dones")
    public Long pagesDones;
    public CrawlStatistics withPagesDones(Long pagesDones) {
        this.pagesDones = pagesDones;
        return this;
    }
    @JsonProperty("pages_dones_2xx")
    public Long pagesDones2xx;
    public CrawlStatistics withPagesDones2xx(Long pagesDones2xx) {
        this.pagesDones2xx = pagesDones2xx;
        return this;
    }
    @JsonProperty("pages_dones_3xx")
    public Long pagesDones3xx;
    public CrawlStatistics withPagesDones3xx(Long pagesDones3xx) {
        this.pagesDones3xx = pagesDones3xx;
        return this;
    }
    @JsonProperty("pages_dones_4xx")
    public Long pagesDones4xx;
    public CrawlStatistics withPagesDones4xx(Long pagesDones4xx) {
        this.pagesDones4xx = pagesDones4xx;
        return this;
    }
    @JsonProperty("pages_dones_5xx")
    public Long pagesDones5xx;
    public CrawlStatistics withPagesDones5xx(Long pagesDones5xx) {
        this.pagesDones5xx = pagesDones5xx;
        return this;
    }
    @JsonProperty("pages_dones_networkerror")
    public Long pagesDonesNetworkerror;
    public CrawlStatistics withPagesDonesNetworkerror(Long pagesDonesNetworkerror) {
        this.pagesDonesNetworkerror = pagesDonesNetworkerror;
        return this;
    }
    @JsonProperty("pages_dones_xxx")
    public Long pagesDonesXxx;
    public CrawlStatistics withPagesDonesXxx(Long pagesDonesXxx) {
        this.pagesDonesXxx = pagesDonesXxx;
        return this;
    }
    @JsonProperty("pages_known")
    public Long pagesKnown;
    public CrawlStatistics withPagesKnown(Long pagesKnown) {
        this.pagesKnown = pagesKnown;
        return this;
    }
}