package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReceiverTiming
 * When the report is sent if not immediately
**/
public class ReceiverTiming {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dailyAt")
    public Double dailyAt;
    public ReceiverTiming withDailyAt(Double dailyAt) {
        this.dailyAt = dailyAt;
        return this;
    }
    @JsonProperty("frequency")
    public ReceiverTimingFrequencyEnum frequency;
    public ReceiverTiming withFrequency(ReceiverTimingFrequencyEnum frequency) {
        this.frequency = frequency;
        return this;
    }
}