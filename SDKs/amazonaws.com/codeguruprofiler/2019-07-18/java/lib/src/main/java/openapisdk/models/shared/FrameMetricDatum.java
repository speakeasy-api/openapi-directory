package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * FrameMetricDatum
 *  Information about a frame metric and its values. 
**/
public class FrameMetricDatum {
    @JsonProperty("frameMetric")
    public FrameMetric frameMetric;
    public FrameMetricDatum withFrameMetric(FrameMetric frameMetric) {
        this.frameMetric = frameMetric;
        return this;
    }
    @JsonProperty("values")
    public Double[] values;
    public FrameMetricDatum withValues(Double[] values) {
        this.values = values;
        return this;
    }
}