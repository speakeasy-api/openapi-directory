package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TimestampRange
 * The range of timestamps for which to return fragments.
**/
public class TimestampRange {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("EndTimestamp")
    public OffsetDateTime endTimestamp;
    public TimestampRange withEndTimestamp(OffsetDateTime endTimestamp) {
        this.endTimestamp = endTimestamp;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("StartTimestamp")
    public OffsetDateTime startTimestamp;
    public TimestampRange withStartTimestamp(OffsetDateTime startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
}