package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeriesFeedback
 * Details about feedback submitted for an anomalous metric.
**/
public class TimeSeriesFeedback {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsAnomaly")
    public Boolean isAnomaly;
    public TimeSeriesFeedback withIsAnomaly(Boolean isAnomaly) {
        this.isAnomaly = isAnomaly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeSeriesId")
    public String timeSeriesId;
    public TimeSeriesFeedback withTimeSeriesId(String timeSeriesId) {
        this.timeSeriesId = timeSeriesId;
        return this;
    }
}