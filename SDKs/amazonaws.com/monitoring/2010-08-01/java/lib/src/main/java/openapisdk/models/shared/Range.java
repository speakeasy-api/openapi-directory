package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Range
 * Specifies one range of days or times to exclude from use for training an anomaly detection model.
**/
public class Range {
    public OffsetDateTime endTime;
    public Range withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    public OffsetDateTime startTime;
    public Range withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}