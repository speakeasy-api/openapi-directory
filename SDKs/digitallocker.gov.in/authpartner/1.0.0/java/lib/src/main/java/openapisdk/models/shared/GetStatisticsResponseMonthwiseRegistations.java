package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetStatisticsResponseMonthwiseRegistations
 * List of last 12 months cumulative user registrations
**/
public class GetStatisticsResponseMonthwiseRegistations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public GetStatisticsResponseMonthwiseRegistations withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details2")
    public GetStatisticsResponseMonthwiseRegistationsDetails2 details2;
    public GetStatisticsResponseMonthwiseRegistations withDetails2(GetStatisticsResponseMonthwiseRegistationsDetails2 details2) {
        this.details2 = details2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetStatisticsResponseMonthwiseRegistations withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("month")
    public Long month;
    public GetStatisticsResponseMonthwiseRegistations withMonth(Long month) {
        this.month = month;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public GetStatisticsResponseMonthwiseRegistations withYear(Long year) {
        this.year = year;
        return this;
    }
}