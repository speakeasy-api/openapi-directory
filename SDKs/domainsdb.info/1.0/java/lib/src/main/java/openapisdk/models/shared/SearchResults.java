package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public Domains[] domains;
    public SearchResults withDomains(Domains[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page")
    public String nextPage;
    public SearchResults withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonProperty("time")
    public String time;
    public SearchResults withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public SearchResults withTotal(Long total) {
        this.total = total;
        return this;
    }
}