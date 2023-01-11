package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStatisticsResponseMonthwiseRegistationsDetails2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetStatisticsResponseMonthwiseRegistationsDetails2 withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetStatisticsResponseMonthwiseRegistationsDetails2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Long month;
    public GetStatisticsResponseMonthwiseRegistationsDetails2 withMonth(Long month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public GetStatisticsResponseMonthwiseRegistationsDetails2 withYear(Long year) {
        this.year = year;
        return this;
    }
}