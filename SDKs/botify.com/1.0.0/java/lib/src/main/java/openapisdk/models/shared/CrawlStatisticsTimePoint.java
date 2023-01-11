package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CrawlStatisticsTimePoint {
    @JsonProperty("count")
    public Long count;
    public CrawlStatisticsTimePoint withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("datetime")
    public OffsetDateTime datetime;
    public CrawlStatisticsTimePoint withDatetime(OffsetDateTime datetime) {
        this.datetime = datetime;
        return this;
    }
}