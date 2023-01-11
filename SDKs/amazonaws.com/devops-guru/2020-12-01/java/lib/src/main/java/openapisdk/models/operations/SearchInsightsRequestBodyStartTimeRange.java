package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SearchInsightsRequestBodyStartTimeRange
 *  A time range used to specify when the behavior of an insight or anomaly started. 
**/
public class SearchInsightsRequestBodyStartTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FromTime")
    public OffsetDateTime fromTime;
    public SearchInsightsRequestBodyStartTimeRange withFromTime(OffsetDateTime fromTime) {
        this.fromTime = fromTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ToTime")
    public OffsetDateTime toTime;
    public SearchInsightsRequestBodyStartTimeRange withToTime(OffsetDateTime toTime) {
        this.toTime = toTime;
        return this;
    }
}