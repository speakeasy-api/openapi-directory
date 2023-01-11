package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IncreaseStreamRetentionPeriodInput
 * Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
**/
public class IncreaseStreamRetentionPeriodInput {
    @JsonProperty("RetentionPeriodHours")
    public Long retentionPeriodHours;
    public IncreaseStreamRetentionPeriodInput withRetentionPeriodHours(Long retentionPeriodHours) {
        this.retentionPeriodHours = retentionPeriodHours;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public IncreaseStreamRetentionPeriodInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}