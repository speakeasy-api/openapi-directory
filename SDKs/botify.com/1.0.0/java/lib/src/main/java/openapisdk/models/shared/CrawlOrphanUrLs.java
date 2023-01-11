package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CrawlOrphanUrLs {
    @JsonProperty("url")
    public String url;
    public CrawlOrphanUrLs withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("visits")
    public Long visits;
    public CrawlOrphanUrLs withVisits(Long visits) {
        this.visits = visits;
        return this;
    }
}