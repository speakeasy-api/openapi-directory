package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionMetric
 * This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension.
**/
public class DimensionMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public Dimension dimension;
    public DimensionMetric withDimension(Dimension dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public Metric[] metrics;
    public DimensionMetric withMetrics(Metric[] metrics) {
        this.metrics = metrics;
        return this;
    }
}