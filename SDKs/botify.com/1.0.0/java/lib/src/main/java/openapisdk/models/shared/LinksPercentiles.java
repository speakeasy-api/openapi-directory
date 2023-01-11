package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LinksPercentiles {
    @JsonProperty("domain")
    public String domain;
    public LinksPercentiles withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("percentiles")
    public LinksPercentilesItem[] percentiles;
    public LinksPercentiles withPercentiles(LinksPercentilesItem[] percentiles) {
        this.percentiles = percentiles;
        return this;
    }
}