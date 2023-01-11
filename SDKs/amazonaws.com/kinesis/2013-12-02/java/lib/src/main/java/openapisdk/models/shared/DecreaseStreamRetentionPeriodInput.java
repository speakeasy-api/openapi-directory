package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DecreaseStreamRetentionPeriodInput
 * Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
**/
public class DecreaseStreamRetentionPeriodInput {
    @JsonProperty("RetentionPeriodHours")
    public Long retentionPeriodHours;
    public DecreaseStreamRetentionPeriodInput withRetentionPeriodHours(Long retentionPeriodHours) {
        this.retentionPeriodHours = retentionPeriodHours;
        return this;
    }
    @JsonProperty("StreamName")
    public String streamName;
    public DecreaseStreamRetentionPeriodInput withStreamName(String streamName) {
        this.streamName = streamName;
        return this;
    }
}