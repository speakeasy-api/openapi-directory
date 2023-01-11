package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinksTopDomainsSamples {
    @JsonProperty("sources")
    public String[] sources;
    public LinksTopDomainsSamples withSources(String[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonProperty("unique_links")
    public Long uniqueLinks;
    public LinksTopDomainsSamples withUniqueLinks(Long uniqueLinks) {
        this.uniqueLinks = uniqueLinks;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public LinksTopDomainsSamples withUrl(String url) {
        this.url = url;
        return this;
    }
}