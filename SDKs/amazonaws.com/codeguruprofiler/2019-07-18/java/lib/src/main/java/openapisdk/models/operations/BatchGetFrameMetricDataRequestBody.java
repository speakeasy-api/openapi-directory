package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetFrameMetricDataRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameMetrics")
    public openapisdk.models.shared.FrameMetric[] frameMetrics;
    public BatchGetFrameMetricDataRequestBody withFrameMetrics(openapisdk.models.shared.FrameMetric[] frameMetrics) {
        this.frameMetrics = frameMetrics;
        return this;
    }
}