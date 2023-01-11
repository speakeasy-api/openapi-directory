package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZoneStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page")
    public String nextPage;
    public ZoneStats withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public ZoneStatistics[] statistics;
    public ZoneStats withStatistics(ZoneStatistics[] statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonProperty("time")
    public String time;
    public ZoneStats withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public ZoneStats withTotal(Long total) {
        this.total = total;
        return this;
    }
}