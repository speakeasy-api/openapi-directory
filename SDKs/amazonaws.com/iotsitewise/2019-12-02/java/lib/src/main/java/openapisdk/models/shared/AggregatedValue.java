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
 * AggregatedValue
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
**/
public class AggregatedValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public QualityEnum quality;
    public AggregatedValue withQuality(QualityEnum quality) {
        this.quality = quality;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public AggregatedValue withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("value")
    public Aggregates value;
    public AggregatedValue withValue(Aggregates value) {
        this.value = value;
        return this;
    }
}