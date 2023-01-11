package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AggregatedProfileTime
 *  Specifies the aggregation period and aggregation start time for an aggregated profile. An aggregated profile is used to collect posted agent profiles during an aggregation period. There are three possible aggregation periods (1 day, 1 hour, or 5 minutes). 
**/
public class AggregatedProfileTime {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public AggregationPeriodEnum period;
    public AggregatedProfileTime withPeriod(AggregationPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public AggregatedProfileTime withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
}