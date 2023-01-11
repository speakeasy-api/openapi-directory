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
 * EndTimeRange
 *  A range of time that specifies when anomalous behavior in an anomaly or insight ended. 
**/
public class EndTimeRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FromTime")
    public OffsetDateTime fromTime;
    public EndTimeRange withFromTime(OffsetDateTime fromTime) {
        this.fromTime = fromTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ToTime")
    public OffsetDateTime toTime;
    public EndTimeRange withToTime(OffsetDateTime toTime) {
        this.toTime = toTime;
        return this;
    }
}