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
 * MetricDatapoint
 * Describes the metric data point.
**/
public class MetricDatapoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public Double average;
    public MetricDatapoint withAverage(Double average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum")
    public Double maximum;
    public MetricDatapoint withMaximum(Double maximum) {
        this.maximum = maximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum")
    public Double minimum;
    public MetricDatapoint withMinimum(Double minimum) {
        this.minimum = minimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleCount")
    public Double sampleCount;
    public MetricDatapoint withSampleCount(Double sampleCount) {
        this.sampleCount = sampleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sum")
    public Double sum;
    public MetricDatapoint withSum(Double sum) {
        this.sum = sum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("timestamp")
    public OffsetDateTime timestamp;
    public MetricDatapoint withTimestamp(OffsetDateTime timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public MetricUnitEnum unit;
    public MetricDatapoint withUnit(MetricUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}