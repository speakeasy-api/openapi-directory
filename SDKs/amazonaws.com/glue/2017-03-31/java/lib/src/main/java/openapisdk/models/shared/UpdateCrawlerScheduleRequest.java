package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCrawlerScheduleRequest {
    @JsonProperty("CrawlerName")
    public String crawlerName;
    public UpdateCrawlerScheduleRequest withCrawlerName(String crawlerName) {
        this.crawlerName = crawlerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;
    public UpdateCrawlerScheduleRequest withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
}